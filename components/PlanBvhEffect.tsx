'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { BVHLoader } from "three/examples/jsm/loaders/BVHLoader.js";

export function PlanBvhEffect() {
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
    scene.background = null;
    scene.add(new THREE.GridHelper(400, 10));

    const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
    camera.position.set(0, 200, 300);

    const clock = new THREE.Clock();
    let mixer: THREE.AnimationMixer | null = null;
    let raf = 0;

    const resize = () => {
      const rect = mountEl.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.elapsedTime;

      mixer?.update(delta);

      camera.position.x = 250 * Math.sin(time * 0.3);
      camera.position.z = 250 * Math.cos(time * 0.3);
      camera.lookAt(0, 80, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    const loader = new BVHLoader();
    loader.load(
      "https://threejs.org/examples/models/bvh/pirouette.bvh",
      (result) => {
        const root = result.skeleton.bones[0];
        const helper = new THREE.SkeletonHelper(root);
        

        scene.add(root);
        scene.add(helper);

        mixer = new THREE.AnimationMixer(root);
        mixer.clipAction(result.clip).play();
      },
      undefined,
      () => {
        // fail silently to avoid breaking hero if fetch fails
      }
    );

    mountEl.appendChild(renderer.domElement);
    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      scene.clear();
      if (mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default PlanBvhEffect;
