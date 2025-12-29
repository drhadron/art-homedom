'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ArchitectureLinesEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f0f);

    const camera = new THREE.PerspectiveCamera(70, 1, 1, 10000);
    camera.position.z = 150;

    const sphereGeometry = new THREE.SphereGeometry(5);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphereInter = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereInter.visible = false;
    scene.add(sphereInter);

    const lineGeometry = new THREE.BufferGeometry();
    const points: number[] = [];
    const point = new THREE.Vector3();
    const direction = new THREE.Vector3();

    for (let i = 0; i < 50; i++) {
      direction.x += Math.random() - 0.5;
      direction.y += Math.random() - 0.5;
      direction.z += Math.random() - 0.5;
      direction.normalize().multiplyScalar(10);
      point.add(direction);
      points.push(point.x, point.y, point.z);
    }

    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

    const parentTransform = new THREE.Object3D();
    parentTransform.position.set(Math.random() * 40 - 20, Math.random() * 40 - 20, Math.random() * 40 - 20);
    parentTransform.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
    parentTransform.scale.setScalar(Math.random() + 0.5);

    const objects: THREE.Object3D[] = [];

    for (let i = 0; i < 50; i++) {
      const lineMaterial = new THREE.LineBasicMaterial({ color: Math.random() * 0xffffff, transparent: true, opacity: 0.85 });
      let object: THREE.Line | THREE.LineSegments;
      if (Math.random() > 0.5) {
        object = new THREE.Line(lineGeometry, lineMaterial);
      } else {
        object = new THREE.LineSegments(lineGeometry, lineMaterial);
      }
      object.position.set(Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200);
      object.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
      object.scale.setScalar(Math.random() + 0.5);
      parentTransform.add(object);
      objects.push(object);
    }

    scene.add(parentTransform);

    const raycaster = new THREE.Raycaster();
    raycaster.params.Line.threshold = 3;
    const pointer = new THREE.Vector2();
    const radius = 100;
    let theta = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.mixBlendMode = "screen";

    let raf = 0;
    let hasSize = false;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      hasSize = true;
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const animate = () => {
      if (hasSize) {
        theta += 0.1;
        camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta));
        camera.position.y = radius * Math.sin(THREE.MathUtils.degToRad(theta));
        camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta));
        camera.lookAt(scene.position);
        camera.updateMatrixWorld();

        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(parentTransform.children, true);
        if (intersects.length > 0) {
          sphereInter.visible = true;
          sphereInter.position.copy(intersects[0].point);
        } else {
          sphereInter.visible = false;
        }

        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(animate);
    };

    container.appendChild(renderer.domElement);
    resize();
    animate();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    container.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      lineGeometry.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default ArchitectureLinesEffect;
