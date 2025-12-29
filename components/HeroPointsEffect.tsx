'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

type HeroPointsEffectProps = {
  className?: string;
};

export function HeroPointsEffect({ className }: HeroPointsEffectProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
    camera.position.set(10, 10, 10);
    camera.lookAt(scene.position);
    camera.updateMatrix();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.mixBlendMode = "screen";

    const threshold = 0.1;
    const pointSize = 0.05;
    const width = 80;
    const length = 160;
    const rotateY = new THREE.Matrix4().makeRotationY(0.005);

    const generatePointCloudGeometry = (color: THREE.Color, w: number, l: number) => {
      const geometry = new THREE.BufferGeometry();
      const numPoints = w * l;
      const positions = new Float32Array(numPoints * 3);
      const colors = new Float32Array(numPoints * 3);
      let k = 0;
      for (let i = 0; i < w; i++) {
        for (let j = 0; j < l; j++) {
          const u = i / w;
          const v = j / l;
          const x = u - 0.5;
          const y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20;
          const z = v - 0.5;
          positions[3 * k] = x;
          positions[3 * k + 1] = y;
          positions[3 * k + 2] = z;
          const intensity = (y + 0.1) * 5;
          colors[3 * k] = color.r * intensity;
          colors[3 * k + 1] = color.g * intensity;
          colors[3 * k + 2] = color.b * intensity;
          k++;
        }
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.computeBoundingBox();
      return geometry;
    };

    const generatePointcloud = (color: THREE.Color, w: number, l: number) => {
      const geometry = generatePointCloudGeometry(color, w, l);
      const material = new THREE.PointsMaterial({ size: pointSize, vertexColors: true });
      return new THREE.Points(geometry, material);
    };

    const generateIndexedPointcloud = (color: THREE.Color, w: number, l: number) => {
      const geometry = generatePointCloudGeometry(color, w, l);
      const numPoints = w * l;
      const indices = new Uint16Array(numPoints);
      let k = 0;
      for (let i = 0; i < w; i++) {
        for (let j = 0; j < l; j++) {
          indices[k] = k;
          k++;
        }
      }
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      const material = new THREE.PointsMaterial({ size: pointSize, vertexColors: true });
      return new THREE.Points(geometry, material);
    };

    const generateIndexedWithOffsetPointcloud = (color: THREE.Color, w: number, l: number) => {
      const geometry = generatePointCloudGeometry(color, w, l);
      const numPoints = w * l;
      const indices = new Uint16Array(numPoints);
      let k = 0;
      for (let i = 0; i < w; i++) {
        for (let j = 0; j < l; j++) {
          indices[k] = k;
          k++;
        }
      }
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      geometry.addGroup(0, indices.length);
      const material = new THREE.PointsMaterial({ size: pointSize, vertexColors: true });
      return new THREE.Points(geometry, material);
    };

    const pcBuffer = generatePointcloud(new THREE.Color(1, 0.4, 0), width, length);
    pcBuffer.scale.set(5, 10, 10);
    pcBuffer.position.set(-5, 0, 0);
    scene.add(pcBuffer);

    const pcIndexed = generateIndexedPointcloud(new THREE.Color(0.3, 1, 0.6), width, length);
    pcIndexed.scale.set(5, 10, 10);
    pcIndexed.position.set(0, 0, 0);
    scene.add(pcIndexed);

    const pcIndexedOffset = generateIndexedWithOffsetPointcloud(new THREE.Color(0, 1, 1), width, length);
    pcIndexedOffset.scale.set(5, 10, 10);
    pcIndexedOffset.position.set(5, 0, 0);
    scene.add(pcIndexedOffset);

    const pointclouds = [pcBuffer, pcIndexed, pcIndexedOffset];

    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff6a00 });
    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 30; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.scale.setScalar(0.01);
      scene.add(sphere);
      spheres.push(sphere);
    }

    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = threshold;
    const pointer = new THREE.Vector2();
    const clock = new THREE.Clock();
    let intersection: THREE.Intersection | null = null;
    let spheresIndex = 0;
    let toggle = 0;
    let raf = 0;
    let hasSize = false;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const widthPx = Math.max(1, rect.width);
      const heightPx = Math.max(1, rect.height);
      camera.aspect = widthPx / heightPx;
      camera.updateProjectionMatrix();
      renderer.setSize(widthPx, heightPx);
      hasSize = true;
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const animate = () => {
      if (hasSize) {
        camera.applyMatrix4(rotateY);
        camera.updateMatrixWorld();

        raycaster.setFromCamera(pointer, camera);
        const intersections = raycaster.intersectObjects(pointclouds, false);
        intersection = intersections.length > 0 ? intersections[0] : null;

        if (toggle > 0.02 && intersection !== null) {
          spheres[spheresIndex].position.copy(intersection.point);
          spheres[spheresIndex].scale.set(1, 1, 1);
          spheresIndex = (spheresIndex + 1) % spheres.length;
          toggle = 0;
        }

        spheres.forEach((sphere) => {
          sphere.scale.multiplyScalar(0.96);
          sphere.scale.clampScalar(0.01, 1);
        });

        toggle += clock.getDelta();
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(animate);
    };

    container.appendChild(renderer.domElement);
    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      renderer.dispose();
      pointclouds.forEach((pc) => {
        pc.geometry.dispose();
        (pc.material as THREE.Material).dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={["pointer-events-none absolute inset-0", className].filter(Boolean).join(" ")} />;
}

export default HeroPointsEffect;
