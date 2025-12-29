'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { TexturePass } from "three/examples/jsm/postprocessing/TexturePass.js";
import { ClearPass } from "three/examples/jsm/postprocessing/ClearPass.js";
import { MaskPass, ClearMaskPass } from "three/examples/jsm/postprocessing/MaskPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

export function DesignHomeMaskEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let box: THREE.Mesh, torus: THREE.Mesh;
    let renderer: THREE.WebGLRenderer;
    let composer: EffectComposer;
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    camera.position.z = 10;

    const scene1 = new THREE.Scene();
    const scene2 = new THREE.Scene();

    box = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4));
    scene1.add(box);

    torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 16, 32));
    scene2.add(torus);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.autoClear = false;
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.mixBlendMode = "screen";

    const clearPass = new ClearPass();
    const clearMaskPass = new ClearMaskPass();
    const maskPass1 = new MaskPass(scene1, camera);
    const maskPass2 = new MaskPass(scene2, camera);

    const textureLoader = new THREE.TextureLoader();
    const texture1 = textureLoader.load("/Image/image copy 11.png");
    texture1.colorSpace = THREE.SRGBColorSpace;
    texture1.minFilter = THREE.LinearFilter;
    texture1.generateMipmaps = false;

    const texture2 = textureLoader.load("/Image/image copy 10.png");
    texture2.colorSpace = THREE.SRGBColorSpace;

    const texturePass1 = new TexturePass(texture1);
    const texturePass2 = new TexturePass(texture2);
    const outputPass = new OutputPass();

    const renderTarget = new THREE.WebGLRenderTarget(1, 1, { stencilBuffer: true });

    composer = new EffectComposer(renderer, renderTarget);
    composer.addPass(clearPass);
    composer.addPass(maskPass1);
    composer.addPass(texturePass1);
    composer.addPass(clearMaskPass);
    composer.addPass(maskPass2);
    composer.addPass(texturePass2);
    composer.addPass(clearMaskPass);
    composer.addPass(outputPass);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    let raf = 0;
    const animate = () => {
      const time = performance.now() * 0.001 + 6000;
      box.position.x = Math.cos(time / 1.5) * 2;
      box.position.y = Math.sin(time) * 2;
      box.rotation.x = time;
      box.rotation.y = time / 2;

      torus.position.x = Math.cos(time) * 2;
      torus.position.y = Math.sin(time / 1.5) * 2;
      torus.rotation.x = time;
      torus.rotation.y = time / 2;

      renderer.clear();
      composer.render(time);
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
      composer.dispose();
      texture1.dispose();
      texture2.dispose();
      renderTarget.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default DesignHomeMaskEffect;
