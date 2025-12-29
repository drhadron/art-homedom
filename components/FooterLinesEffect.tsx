'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function FooterLinesEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(55, 1, 1, 2000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.mixBlendMode = "screen";

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const divisions = 100;
    const spread = 600;

    for (let i = 0; i < divisions; i++) {
      const x = THREE.MathUtils.randFloatSpread(spread);
      const y = THREE.MathUtils.randFloatSpread(spread * 0.6);
      const z = THREE.MathUtils.randFloatSpread(spread);
      vertices.push(x, y, z);
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.LineDashedMaterial({
      color: 0xff6a00,
      dashSize: 3,
      gapSize: 1.5,
      linewidth: 1,
      transparent: true,
      opacity: 0.9,
    });

    const lines: THREE.LineSegments[] = [];

    for (let i = 0; i < 4; i++) {
      const line = new THREE.LineSegments(geometry, material);
      line.computeLineDistances();
      line.rotation.x = THREE.MathUtils.degToRad(25 * i);
      line.rotation.y = THREE.MathUtils.degToRad(40 * i);
      line.rotation.z = THREE.MathUtils.degToRad(15 * i);
      scene.add(line);
      lines.push(line);
    }

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
        lines.forEach((line, idx) => {
          const speed = 0.001 + idx * 0.0004;
          line.rotation.x += speed * 1.4;
          line.rotation.y -= speed;
          line.rotation.z += speed * 0.8;
        });
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(animate);
    };

    container.appendChild(renderer.domElement);
    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 z-0" />;
}

export default FooterLinesEffect;
