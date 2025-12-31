'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
type DesignIblEffectProps = {
  textureSrc?: string | null;
  lightPreset?: "default" | "bright";
};

export function DesignIblEffect({ textureSrc, lightPreset = "bright" }: DesignIblEffectProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const bgColor = lightPreset === "bright" ? 0x181818 : 0x0b0b0b;
    scene.background = new THREE.Color(bgColor);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.set(7, 1.5, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.mixBlendMode = "screen";

    const textureLoader = new THREE.TextureLoader();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    let envMap: THREE.Texture | null = null;
    let bgTexture: THREE.Texture | null = null;

    const applyEnvFromImage = () =>
      new Promise<void>((resolve) => {
        if (textureSrc === null) {
          resolve();
          return;
        }

        textureLoader.load(
          textureSrc || "/Image/image copy 29.png",
          (tex) => {
            tex.mapping = THREE.EquirectangularReflectionMapping;
            tex.colorSpace = THREE.SRGBColorSpace;
            bgTexture = tex;
            const rt = pmremGenerator.fromEquirectangular(tex);
            envMap = rt.texture;
            scene.environment = envMap;
            scene.background = tex;
            resolve();
          },
          undefined,
          () => {
            resolve();
          }
        );
      });

    const sphereGeometry = new THREE.SphereGeometry(0.6, 64, 32);

    const makeSphere = (opts: Partial<THREE.MeshPhysicalMaterialParameters>, z: number) => {
      const material = new THREE.MeshPhysicalMaterial({
        metalness: 0,
        roughness: 0.2,
        ...opts,
      });
      const mesh = new THREE.Mesh(sphereGeometry, material);
      mesh.position.z = z;
      mesh.position.y = 0.2;
      scene.add(mesh);
      return mesh;
    };

    makeSphere({ transmission: 1.0, thickness: 2.0, roughness: 0.0, metalness: 0 }, 2.4);
    makeSphere({ metalness: 0, roughness: 1.0 }, 1.2);
    makeSphere({ metalness: 1.0, roughness: 0.05 }, 0);
    makeSphere({ metalness: 1.0, roughness: 0.35, color: 0x888888 }, -1.2);
    makeSphere({ metalness: 0.0, roughness: 0.0, color: 0x6ab440 }, -2.4);

    const gridColor1 = lightPreset === "bright" ? 0xaaaaaa : 0x222222;
    const gridColor2 = lightPreset === "bright" ? 0x888888 : 0x111111;
    const grid = new THREE.GridHelper(10, 20, gridColor1, gridColor2);
    scene.add(grid);

    const lightIntensity = lightPreset === "bright" ? 3.2 : 1.5;
    const light = new THREE.DirectionalLight(0xffffff, lightIntensity);
    light.position.set(5, 5, 5);
    scene.add(light);
    const ambient = new THREE.AmbientLight(0xffffff, lightPreset === "bright" ? 1.2 : 0.45);
    scene.add(ambient);

    let raf = 0;
    let hasSize = false;
    const target = new THREE.Vector3(0, 0, 0);

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
        const t = Date.now() * 0.0003;
        camera.position.x = 7 * Math.sin(t);
        camera.position.z = 7 * Math.cos(t);
        camera.lookAt(target);
        renderer.toneMappingExposure = lightPreset === "bright" ? 2.0 : 1.0;
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(animate);
    };

    container.appendChild(renderer.domElement);
    resize();
    applyEnvFromImage().then(() => {
      animate();
    });
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      if (envMap) envMap.dispose();
      if (bgTexture) bgTexture.dispose();
      pmremGenerator.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

export default DesignIblEffect;
