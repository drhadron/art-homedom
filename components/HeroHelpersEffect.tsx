'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper.js";
import { VertexTangentsHelper } from "three/examples/jsm/helpers/VertexTangentsHelper.js";

export function HeroHelpersEffect() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.pointerEvents = "none";

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
    camera.position.z = 400;

    const light = new THREE.PointLight();
    light.position.set(200, 100, 150);
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 15));

    const gridHelper = new THREE.GridHelper(400, 40, 0x0000ff, 0x808080);
    gridHelper.position.y = -150;
    gridHelper.position.x = -150;
    scene.add(gridHelper);

    const polarGridHelper = new THREE.PolarGridHelper(200, 16, 8, 64, 0x0000ff, 0x808080);
    polarGridHelper.position.y = -150;
    polarGridHelper.position.x = 200;
    scene.add(polarGridHelper);

    let vnh: VertexNormalsHelper | null = null;
    let vth: VertexTangentsHelper | null = null;

    const loader = new GLTFLoader();
    loader.load(
      "https://threejs.org/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb",
      (gltf) => {
        const mesh = gltf.scene.children[0] as THREE.Mesh;
        mesh.geometry.computeTangents();

        const group = new THREE.Group();
        group.scale.multiplyScalar(50);
        group.add(mesh);
        group.updateMatrixWorld(true);
        scene.add(group);

        vnh = new VertexNormalsHelper(mesh, 5);
        vth = new VertexTangentsHelper(mesh, 5);
        scene.add(vnh);
        scene.add(vth);
        scene.add(new THREE.BoxHelper(mesh));

        const baseLineMaterial = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.25,
          depthTest: false,
        });

        const wireframe = new THREE.WireframeGeometry(mesh.geometry);
        const wireframeLine = new THREE.LineSegments(wireframe, baseLineMaterial.clone());
        wireframeLine.position.x = 4;
        group.add(wireframeLine);
        scene.add(new THREE.BoxHelper(wireframeLine));

        const edges = new THREE.EdgesGeometry(mesh.geometry);
        const edgesLine = new THREE.LineSegments(edges, baseLineMaterial.clone());
        edgesLine.position.x = -4;
        group.add(edgesLine);
        scene.add(new THREE.BoxHelper(edgesLine));

        scene.add(new THREE.BoxHelper(group));
        scene.add(new THREE.BoxHelper(scene));
      },
      undefined,
      () => {
        // swallow errors to avoid breaking the hero if fetch fails
      }
    );

    const resize = () => {
      const rect = mountEl.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    let raf = 0;
    const animate = () => {
      const time = -performance.now() * 0.0003;
      camera.position.x = 400 * Math.cos(time);
      camera.position.z = 400 * Math.sin(time);
      camera.lookAt(scene.position);

      light.position.x = Math.sin(time * 1.7) * 300;
      light.position.y = Math.cos(time * 1.5) * 400;
      light.position.z = Math.cos(time * 1.3) * 300;

      vnh?.update();
      vth?.update();

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
      renderer.dispose();
      scene.clear();
      if (mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default HeroHelpersEffect;
