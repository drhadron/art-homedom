'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { hilbert3D } from "three/examples/jsm/utils/GeometryUtils.js";

export function DesignDashedEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0b0b);
    scene.fog = new THREE.Fog(0x0b0b0b, 150, 240);

    const camera = new THREE.PerspectiveCamera(60, 1, 1, 200);
    camera.position.z = 150;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.mixBlendMode = "screen";

    const objects: THREE.Object3D[] = [];

    const subdivisions = 6;
    const recursion = 1;
    const points = hilbert3D(new THREE.Vector3(0, 0, 0), 40.0, recursion, 0, 1, 2, 3, 4, 5, 6, 7);
    const spline = new THREE.CatmullRomCurve3(points);
    const samples = spline.getPoints(points.length * subdivisions);
    const geometrySpline = new THREE.BufferGeometry().setFromPoints(samples);
    const line = new THREE.Line(
      geometrySpline,
      new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 1, gapSize: 0.5, linewidth: 1, transparent: true, opacity: 0.8 })
    );
    line.computeLineDistances();
    scene.add(line);
    objects.push(line);

    const boxGeometry = createBoxGeometry(90, 90, 90);
    const lineSegments = new THREE.LineSegments(
      boxGeometry,
      new THREE.LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1, linewidth: 1, transparent: true, opacity: 0.9 })
    );
    lineSegments.computeLineDistances();
    scene.add(lineSegments);
    objects.push(lineSegments);

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

    const animate = () => {
      if (hasSize) {
        const time = Date.now() * 0.001;
        objects.forEach((object, idx) => {
          if ((object as THREE.Line).isLine) {
            const base = 0.25 * 1.9;
            const offset = idx * 0.05;
            object.rotation.x = (base + offset) * time;
            object.rotation.y = (base * 1.1 + offset) * time;
            object.rotation.z = (base * 0.7 + offset) * time;
          }
        });
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(animate);
    };

    container.appendChild(renderer.domElement);
    resize();
    animate();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      renderer.dispose();
      geometrySpline.dispose();
      boxGeometry.dispose();
      objects.length = 0;
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

function createBoxGeometry(width: number, height: number, depth: number) {
  const w = width * 0.5;
  const h = height * 0.5;
  const d = depth * 0.5;

  const geometry = new THREE.BufferGeometry();
  const position: number[] = [];

  position.push(
    -w, -h, -d, -w, h, -d,
    -w, h, -d, w, h, -d,
    w, h, -d, w, -h, -d,
    w, -h, -d, -w, -h, -d,
    -w, -h, d, -w, h, d,
    -w, h, d, w, h, d,
    w, h, d, w, -h, d,
    w, -h, d, -w, -h, d,
    -w, -h, -d, -w, -h, d,
    -w, h, -d, -w, h, d,
    w, h, -d, w, h, d,
    w, -h, -d, w, -h, d
  );

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
  return geometry;
}

export default DesignDashedEffect;
