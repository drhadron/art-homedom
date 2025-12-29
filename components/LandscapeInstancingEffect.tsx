'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import TWEEN from "three/examples/jsm/libs/tween.module.js";

export function LandscapeInstancingEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.pointerEvents = "none";

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    const timer = new THREE.Timer();
    timer.connect(document);

    const loader = new THREE.TextureLoader();
    const texture = loader.load("https://threejs.org/examples/textures/edge3.jpg");
    texture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ map: texture });

    const amount = 100;
    const count = amount * amount;
    const dummy = new THREE.Object3D();
    const seeds: number[] = [];
    const baseColors: number[] = [];

    const color = new THREE.Color();
    const colors = [new THREE.Color(0x00ffff), new THREE.Color(0xffff00), new THREE.Color(0xff00ff)];
    const animation = { t: 0 };
    let currentColorIndex = 0;
    let nextColorIndex = 1;

    const maxDistance = 75;
    const cameraTarget = new THREE.Vector3();

    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);

    let i = 0;
    const offset = (amount - 1) / 2;
    for (let x = 0; x < amount; x++) {
      for (let z = 0; z < amount; z++) {
        dummy.position.set(offset - x, 0, offset - z);
        dummy.scale.set(1, 2, 1);
        dummy.updateMatrix();

        color.setHSL(1, 0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5);
        baseColors.push(color.getHex());

        mesh.setMatrixAt(i, dummy.matrix);
        mesh.setColorAt(i, color.clone().multiply(colors[0]));
        seeds.push(Math.random());
        i++;
      }
    }

    const resize = () => {
      const rect = mountEl.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const startTween = () => {
      new TWEEN.Tween(animation)
        .to({ t: 1 }, 2000)
        .easing(TWEEN.Easing.Sinusoidal.In)
        .onComplete(() => {
          animation.t = 0;
          currentColorIndex = nextColorIndex;
          nextColorIndex += 1;
          if (nextColorIndex >= colors.length) nextColorIndex = 0;
        })
        .start();
    };

    const interval = window.setInterval(startTween, 3000);
    let raf = 0;

    const animate = () => {
      timer.update();
      const time = timer.getElapsed();
      TWEEN.update();

      camera.position.x = Math.sin(time / 4) * 10;
      camera.position.z = Math.cos(time / 4) * 10;
      camera.position.y = 8 + Math.cos(time / 2) * 2;

      cameraTarget.x = Math.sin(time / 4) * -8;
      cameraTarget.z = Math.cos(time / 2) * -8;
      camera.lookAt(cameraTarget);
      camera.up.x = Math.sin(time / 400);

      for (let idx = 0; idx < mesh.count; idx++) {
        mesh.getMatrixAt(idx, dummy.matrix);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        dummy.position.y = Math.abs(Math.sin((time + seeds[idx]) * 2 + seeds[idx]));
        dummy.updateMatrix();
        mesh.setMatrixAt(idx, dummy.matrix);

        if (animation.t > 0) {
          const currentColor = colors[currentColorIndex];
          const nextColor = colors[nextColorIndex];
          const f = dummy.position.length() / maxDistance;
          if (f <= animation.t) {
            color.set(baseColors[idx]).multiply(nextColor);
          } else {
            color.set(baseColors[idx]).multiply(currentColor);
          }
          mesh.setColorAt(idx, color);
        }
      }

      mesh.instanceMatrix.needsUpdate = true;
      if (animation.t > 0) mesh.instanceColor!.needsUpdate = true;
      mesh.computeBoundingSphere();

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    mountEl.appendChild(renderer.domElement);
    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(interval);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      pmremGenerator.dispose();
      texture.dispose();
      geometry.dispose();
      material.dispose();
      scene.clear();
      if (mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default LandscapeInstancingEffect;
