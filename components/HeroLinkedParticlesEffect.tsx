'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroLinkedParticlesEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 1, 1000);
    camera.position.set(0, 0, 180);

    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const bounds = 120;
    const linkDistance = 28;

    const rand = () => (Math.random() - 0.5) * 2;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = rand() * bounds;
      positions[i * 3 + 1] = rand() * bounds * 0.6;
      positions[i * 3 + 2] = rand() * bounds;
      velocities[i * 3] = rand() * 0.3;
      velocities[i * 3 + 1] = rand() * 0.3;
      velocities[i * 3 + 2] = rand() * 0.3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xff6a00,
      size: 3,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    const maxSegments = particleCount * particleCount;
    const linePositions = new Float32Array(maxSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const mouse = new THREE.Vector2(0, 0);
    const onPointerMove = (event: PointerEvent) => {
      const rect = mountEl.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const rect = mountEl.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    let raf = 0;
    const animate = () => {
      const positionsAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const lineAttr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
      let segmentCount = 0;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        velocities[i3] += mouse.x * 0.02;
        velocities[i3 + 1] += mouse.y * 0.02;

        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        ["x", "y", "z"].forEach((axis, idx) => {
          const max = idx === 1 ? bounds * 0.6 : bounds;
          if (positions[i3 + idx] > max || positions[i3 + idx] < -max) {
            velocities[i3 + idx] *= -0.95;
            positions[i3 + idx] = THREE.MathUtils.clamp(positions[i3 + idx], -max, max);
          }
        });
      }

      for (let i = 0; i < particleCount; i++) {
        const ix = positions[i * 3];
        const iy = positions[i * 3 + 1];
        const iz = positions[i * 3 + 2];
        for (let j = i + 1; j < particleCount; j++) {
          const dx = ix - positions[j * 3];
          const dy = iy - positions[j * 3 + 1];
          const dz = iz - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < linkDistance && segmentCount < maxSegments) {
            const alpha = 1 - dist / linkDistance;
            lineMaterial.opacity = 0.2 * alpha + 0.1;
            const base = segmentCount * 6;
            linePositions[base] = ix;
            linePositions[base + 1] = iy;
            linePositions[base + 2] = iz;
            linePositions[base + 3] = positions[j * 3];
            linePositions[base + 4] = positions[j * 3 + 1];
            linePositions[base + 5] = positions[j * 3 + 2];
            segmentCount++;
          }
        }
      }

      positionsAttr.needsUpdate = true;
      lineAttr.needsUpdate = true;
      lineGeometry.setDrawRange(0, segmentCount * 2);

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    mountEl.appendChild(renderer.domElement);
    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      geometry.dispose();
      lineGeometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      scene.clear();
      if (mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default HeroLinkedParticlesEffect;
