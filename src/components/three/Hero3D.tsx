"use client";

import { useEffect, useRef } from "react";
import type * as T from "three";

/**
 * Ambient WebGL scene for the homepage hero: a glossy "buzzer" orb with an
 * orbiting glass ring and a few request chips drifting at different depths.
 * - three.js is loaded lazily, after first paint.
 * - Pauses when off-screen or the tab is hidden; renders a single still frame
 *   for prefers-reduced-motion.
 */
export function Hero3D({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed || !host.current) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = window.innerWidth < 768;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.25 : 1.6));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      el.appendChild(renderer.domElement);
      renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 0, 14);

      // Soft studio lighting in brand hues.
      scene.add(new THREE.HemisphereLight(0xdfe1ff, 0x1a1640, 1.1));
      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(4, 6, 8);
      scene.add(key);
      const rimA = new THREE.PointLight(0x8b5cf6, 60, 30);
      rimA.position.set(-6, 3, 4);
      scene.add(rimA);
      const rimB = new THREE.PointLight(0xd946ef, 40, 30);
      rimB.position.set(6, -4, 3);
      scene.add(rimB);

      const group = new THREE.Group();
      scene.add(group);

      // The buzzer orb.
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(1.55, 96, 96),
        new THREE.MeshPhysicalMaterial({ color: 0x5c5fe6, metalness: 0.15, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.6, sheenColor: new THREE.Color(0xd946ef) }),
      );
      orb.position.set(2.3, -2.4, 0);
      orb.scale.setScalar(0.8);
      group.add(orb);

      // Glass ring orbiting the orb.
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.55, 0.07, 32, 200),
        new THREE.MeshPhysicalMaterial({ color: 0xc7c8ff, metalness: 0.4, roughness: 0.15, transparent: true, opacity: 0.75, clearcoat: 1 }),
      );
      ring.rotation.set(1.15, 0.25, 0);
      group.add(ring);
      const ring2Mat = (ring.material as T.MeshPhysicalMaterial).clone();
      ring2Mat.opacity = 0.35;
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.55, 0.05, 32, 200), ring2Mat);
      ring2.scale.setScalar(1.28);
      ring2.rotation.set(1.35, -0.45, 0.3);
      group.add(ring2);

      // Request "chips": rounded capsules floating at different depths.
      const chipGeo = new THREE.CapsuleGeometry(0.22, 0.7, 8, 24);
      const chipMats = [0x8b5cf6, 0x6d91ff, 0xd946ef, 0xffffff].map(
        (c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.25, metalness: 0.05, clearcoat: 1, transparent: true, opacity: c === 0xffffff ? 0.9 : 0.85 }),
      );
      const chips: { m: T.Mesh; base: T.Vector3; speed: number; phase: number }[] = [];
      const count = small ? 5 : 9;
      for (let i = 0; i < count; i++) {
        const m = new THREE.Mesh(chipGeo, chipMats[i % chipMats.length]);
        // Arc on the right-hand side only, so chips never cross the hero copy.
        const angle = -Math.PI * 0.55 + (i / Math.max(1, count - 1)) * Math.PI * 1.1;
        const radius = 3.6 + (i % 3) * 0.9;
        const base = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.6, -1.5 - (i % 4) * 1.2);
        m.position.copy(base);
        m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.PI / 2);
        m.scale.setScalar(0.7 + (i % 3) * 0.2);
        group.add(m);
        chips.push({ m, base, speed: 0.25 + (i % 5) * 0.06, phase: i * 1.7 });
      }

      // Place the composition toward the right on wide screens (behind the dashboard card).
      const layout = () => {
        const w = el.clientWidth || 1;
        const h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const wide = w >= 1024;
        group.position.set(wide ? 3.6 : 0, wide ? 0.4 : 1.2, 0);
        group.scale.setScalar(wide ? 1 : 0.8);
      };
      layout();
      const ro = new ResizeObserver(layout);
      ro.observe(el);

      // Gentle pointer parallax.
      const target = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      let visible = true;
      const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting), { threshold: 0 });
      io.observe(el);

      const clock = new THREE.Clock();
      let raf = 0;
      const frame = () => {
        raf = requestAnimationFrame(frame);
        if (!visible || document.hidden) return;
        const t = clock.getElapsedTime();
        orb.rotation.y = t * 0.08;
        orb.position.y = -2.4 + Math.sin(t * 0.8) * 0.12;
        ring.rotation.z = t * 0.06;
        ring2.rotation.z = -t * 0.04;
        for (const c of chips) {
          c.m.position.y = c.base.y + Math.sin(t * c.speed + c.phase) * 0.35;
          c.m.rotation.x += 0.0015;
        }
        group.rotation.y += (target.x * 0.14 - group.rotation.y) * 0.025;
        group.rotation.x += (target.y * 0.08 - group.rotation.x) * 0.025;
        // Scroll depth: the scene turns and drifts back as the hero scrolls away.
        const sy = Math.min(window.scrollY, 900);
        group.rotation.z = sy * 0.0005;
        camera.position.z = 14 + sy * 0.006;
        renderer.render(scene, camera);
      };
      if (reduce) renderer.render(scene, camera);
      else frame();
      requestAnimationFrame(() => el.classList.add("is-ready"));

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onPointer);
        ro.disconnect();
        io.disconnect();
        scene.traverse((o) => {
          const mesh = o as T.Mesh;
          mesh.geometry?.dispose?.();
          const mat = mesh.material as T.Material | T.Material[] | undefined;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat?.dispose?.();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={host} aria-hidden className={`hero3d pointer-events-none ${className}`} />;
}
