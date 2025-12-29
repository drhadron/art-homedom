'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function PlanVoxelEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
    camera.position.set(500, 800, 1300);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let isShiftDown = false;

    const rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
    const rollOverMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6a00,
      opacity: 0.35,
      transparent: true,
    });
    const rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
    scene.add(rollOverMesh);

    const cubeGeo = new THREE.BoxGeometry(50, 50, 50);
    const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xfeb74c });

    const gridHelper = new THREE.GridHelper(1000, 20, 0x444444, 0x222222);
    scene.add(gridHelper);

    const objects: THREE.Object3D[] = [];

    const geometry = new THREE.PlaneGeometry(1000, 1000);
    geometry.rotateX(-Math.PI / 2);
    const plane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ visible: false }));
    scene.add(plane);
    objects.push(plane);

    const ambientLight = new THREE.AmbientLight(0x606060, 2.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 0.75, 0.5).normalize();
    scene.add(directionalLight);

    let raf = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(objects, false);
      if (intersects.length > 0) {
        const intersect = intersects[0];
        rollOverMesh.position.copy(intersect.point).add(intersect.face!.normal);
        rollOverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
        render();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(objects, false);
      if (intersects.length > 0) {
        const intersect = intersects[0];
        if (isShiftDown) {
          if (intersect.object !== plane) {
            scene.remove(intersect.object);
            const idx = objects.indexOf(intersect.object);
            if (idx >= 0) objects.splice(idx, 1);
          }
        } else {
          const voxel = new THREE.Mesh(cubeGeo, cubeMaterial);
          voxel.position.copy(intersect.point).add(intersect.face!.normal);
          voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
          scene.add(voxel);
          objects.push(voxel);
        }
        render();
      }
    };

    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Shift") isShiftDown = true;
    };

    const onDocumentKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Shift") isShiftDown = false;
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      render();
      raf = requestAnimationFrame(animate);
    };

    container.appendChild(renderer.domElement);
    resize();
    animate();

    window.addEventListener("resize", resize);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onDocumentKeyDown);
    window.addEventListener("keyup", onDocumentKeyUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onDocumentKeyDown);
      window.removeEventListener("keyup", onDocumentKeyUp);
      geometry.dispose();
      cubeGeo.dispose();
      rollOverGeo.dispose();
      cubeMaterial.dispose();
      rollOverMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default PlanVoxelEffect;
