'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

const SEPARATION = 100;
const AMOUNTX = 50;
const AMOUNTY = 50;

export function WavesParticlesEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let camera: THREE.PerspectiveCamera | null = null;
    let scene: THREE.Scene | null = null;
    let renderer: THREE.WebGLRenderer | null = null;
    let particles: THREE.Points | null = null;
    let animationId: number | null = null;

    let count = 0;
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = container.clientWidth / 2;
    let windowHalfY = container.clientHeight / 2;

    const onPointerMove = (event: PointerEvent) => {
      if (event.isPrimary === false) return;
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onResize = () => {
      if (!renderer || !camera || !container) return;
      windowHalfX = container.clientWidth / 2;
      windowHalfY = container.clientHeight / 2;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 10000);
      camera.position.z = 1000;

      const numParticles = AMOUNTX * AMOUNTY;
      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0;
      let j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
          positions[i + 1] = 0; // y
          positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z
          scales[j] = 1;
          i += 3;
          j++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xffffff) },
        },
        vertexShader: `
          attribute float scale;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          void main() {
            if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
            gl_FragColor = vec4(color, 1.0);
          }
        `,
        transparent: true,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      container.style.touchAction = "none";
      container.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onResize);
    };

    const render = () => {
      if (!camera || !scene || !renderer || !particles) return;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const positions = (particles.geometry as THREE.BufferGeometry).attributes.position.array as Float32Array;
      const scales = (particles.geometry as THREE.BufferGeometry).attributes.scale.array as Float32Array;

      let i = 0;
      let j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
          scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;
          i += 3;
          j++;
        }
      }

      (particles.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
      (particles.geometry as THREE.BufferGeometry).attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.1;
      animationId = requestAnimationFrame(render);
    };

    init();
    render();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointermove", onPointerMove);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentElement === container) {
          container.removeChild(renderer.domElement);
        }
      }
      particles?.geometry?.dispose();
      (particles?.material as THREE.Material | undefined)?.dispose?.();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}

export default WavesParticlesEffect;
