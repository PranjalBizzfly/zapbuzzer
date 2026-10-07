"use client";

import { useEffect, useRef, useState } from "react";
import type * as T from "three";

/**
 * Homepage hero — "The Request Carousel".
 *
 * A sculptural arrangement of machined metal discs on a black stage. The centre disc carries
 * the ZapBuzzer bell; six discs orbit it, each embossed with an office request: coffee, print,
 * IT, facilities, courier and assignment. All geometry is modelled here: lathe-turned disc
 * profiles with a raised lip and chamfer, reeded edges, concentric machining marks and
 * extruded chrome relief symbols.
 *
 * Light comes from a custom studio environment (blue and violet strip lights, a soft top box),
 * which gives the edges their blue reflections, plus a restrained bloom pass on desktop.
 * Mouse parallax, a gentle scroll crane, pause when off-screen, a lighter mobile path and a
 * single still frame for reduced motion.
 */

type Pt = [number, number];

// Site palette (globals.css): indigo accent, violet, lavender accent-on-dark.
const INDIGO = 0x5c5fe6;
const VIOLET = 0x8b5cf6;
const LAVENDER = 0xa5a8ff;

/** Per-theme looks. Dark: gunmetal discs, lavender line-art. Light: pearl-silver discs, indigo line-art. */
type Look = {
  exposure: number; body: number; bodyMetal: number; edge: number; mark: number; markMetal: number; markGlow: number;
  bezel: number; bezelGlow: number; rim: number; rimA: number; rimBackA: number; plinth: number; plinthMetal: number; bump: number;
  trace: [number, number, number]; traceA: number; halo: [number, number, number]; haloA: number; clapperGlow: number;
  bead: number; beadMetal: number; bodyGlow: number; ringK: number; shadow: [number, number, number]; shadowA: number;
};
const DARK: Look = {
  exposure: 0.9, body: 0x1c1f36, bodyMetal: 1, edge: 0x8a8fc4, mark: 0xc9cbff, markMetal: 0.35, markGlow: 0.16,
  bezel: LAVENDER, bezelGlow: 0.18, rim: 0x8b8eff, rimA: 0.32, rimBackA: 0.22, plinth: 0x0d0f1c, plinthMetal: 1, bump: 0.4,
  trace: [0.42, 0.44, 0.98], traceA: 0.5, halo: [0.36, 0.37, 0.9], haloA: 0.16, clapperGlow: 0.12,
  bead: 0x3a3f78, beadMetal: 0.6, bodyGlow: 0, ringK: 2.7, shadow: [0, 0, 0.02], shadowA: 0.55,
};
// Light: frosted white glass discs and a pearly platform with lavender light, indigo line-art.
// Contrast comes from shading, indigo edges and a contact shadow rather than from grey: the
// bodies stay white, the reeded edges and plinth lips pick up indigo, the icons are deep indigo.
const LIGHT: Look = {
  exposure: 1.0, body: 0xffffff, bodyMetal: 0, edge: 0x8f92f2, mark: 0x4447d8, markMetal: 0, markGlow: 0.32,
  bezel: 0x5c5fe6, bezelGlow: 0.55, rim: 0x6f72ee, rimA: 0.7, rimBackA: 0.2, plinth: 0xe9eafd, plinthMetal: 0, bump: 0.04,
  trace: [0.36, 0.37, 0.9], traceA: 0, halo: [0.62, 0.6, 1.0], haloA: 0.42, clapperGlow: 0.25,
  bead: 0xf3f3ff, beadMetal: 0, bodyGlow: 0.16, ringK: 1.15, shadow: [0.27, 0.25, 0.62], shadowA: 0.34,
};

export function HeroDiscs({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      const THREE = await import("three");
      if (disposed || !host.current) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Lower-powered devices (few cores or little memory) get the lighter mobile geometry,
      // a 1x pixel ratio and a 30fps cap; the scene itself is unchanged.
      const nav = navigator as Navigator & { deviceMemory?: number };
      const lowPower = (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 2;
      const small = window.innerWidth < 768 || lowPower;
      const disposables: { dispose(): void }[] = [];
      const keep = <D extends { dispose(): void }>(d: D) => (disposables.push(d), d);

      let renderer: T.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        return; // No WebGL: the hero background and the text remain.
      }
      // Phones get up to 2x so the metal edges and line-art stay crisp; low-power devices stay at 1.25x.
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.25 : 2));
      renderer.setClearColor(0x000000, 0); // transparent: the hero's own theme background shows through
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      el.appendChild(renderer.domElement);
      renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);

      // ───────── studio environments (reflections only), one per theme ─────────
      const pmrem = new THREE.PMREMGenerator(renderer);
      const buildEnv = (bg: number, scale: number) => {
        const envScene = new THREE.Scene();
        envScene.background = new THREE.Color(bg);
        const panel = (w: number, h: number, color: number, power: number, pos: number[]) => {
          const p = new THREE.Mesh(keep(new THREE.PlaneGeometry(w, h)), keep(new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(power * scale), side: THREE.DoubleSide })));
          p.position.set(pos[0], pos[1], pos[2]);
          p.lookAt(0, 0, 0);
          envScene.add(p);
        };
        panel(7, 2.2, 0xffffff, 2.2, [0, 7, 2]); // top softbox
        panel(0.5, 9, INDIGO, 4, [-7, 0, 3]); // indigo strip, left
        panel(0.5, 9, VIOLET, 3, [7, 0.5, 2]); // violet strip, right
        panel(0.22, 7, 0xffffff, 3.2, [-5, 2, 5]); // fine white strips: silver lines along the rims
        panel(0.22, 7, 0xffffff, 2.8, [5, 2, 5]);
        panel(10, 5, LAVENDER, 0.32, [0, 1.5, 9]); // broad soft front fill
        panel(3, 1.2, 0xffffff, 1.4, [-3.5, 3.5, 7]); // small high key for the relief
        return keep(pmrem.fromScene(envScene, 0.03).texture);
      };
      const envDark = buildEnv(0x05060c, 1);
      const envLight = buildEnv(0xeef0fb, 0.85);

      // Direct lights for shading the relief: soft key, indigo and violet rims.
      const key = new THREE.DirectionalLight(0xffffff, 1.5);
      key.position.set(-3, 5, 6);
      const rimL = new THREE.DirectionalLight(INDIGO, 1.6);
      rimL.position.set(-6, 2, -5);
      const rimR = new THREE.DirectionalLight(VIOLET, 1.1);
      rimR.position.set(6, 1, -4);
      scene.add(key, rimL, rimR);

      // ───────── procedural textures ─────────
      const canvasTex = (w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, repeat?: [number, number]) => {
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        draw(c.getContext("2d")!);
        const t = keep(new THREE.CanvasTexture(c));
        if (repeat) {
          t.wrapS = t.wrapT = THREE.RepeatWrapping;
          t.repeat.set(repeat[0], repeat[1]);
        }
        return t;
      };
      // Lathe UV.v runs along the profile, so horizontal stripes become concentric machining rings.
      const machined = canvasTex(8, 1024, (c) => {
        for (let y = 0; y < 1024; y++) {
          const v = 128 + Math.sin(y * 1.7) * 30 + Math.sin(y * 0.31) * 18 + (Math.random() - 0.5) * 30;
          c.fillStyle = `rgb(${v},${v},${v})`;
          c.fillRect(0, y, 8, 1);
        }
      });
      // Reeded edge: vertical ribs around the circumference.
      const reeds = canvasTex(1024, 8, (c) => {
        for (let x = 0; x < 1024; x++) {
          const v = 128 + Math.sin((x / 1024) * Math.PI * 2 * 180) * 110;
          c.fillStyle = `rgb(${v},${v},${v})`;
          c.fillRect(x, 0, 1, 8);
        }
      });

      // ───────── materials ─────────
      // Colours and strengths are set per theme in applyTheme().
      const bodyMat = keep(new THREE.MeshPhysicalMaterial({ roughness: 0.28, clearcoat: 0.6, clearcoatRoughness: 0.2, bumpMap: machined, bumpScale: 0.4, envMapIntensity: 1 }));
      const edgeMat = keep(new THREE.MeshPhysicalMaterial({ metalness: 1, roughness: 0.2, bumpMap: reeds, bumpScale: 0.35, envMapIntensity: 1.2 }));
      const chromeMat = keep(new THREE.MeshPhysicalMaterial({ roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 1, emissive: INDIGO }));
      const orangeMat = keep(new THREE.MeshPhysicalMaterial({ color: 0xfb800a, metalness: 0.5, roughness: 0.3, clearcoat: 1, emissive: 0xfb800a }));
      const glowBlue = keep(new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }));
      const glowViolet = keep(new THREE.MeshBasicMaterial({ color: VIOLET, transparent: true, depthWrite: false }));

      // ───────── disc geometry (unit radius) ─────────
      const profile: Pt[] = [
        [0, 0.05], [0.79, 0.05], [0.81, 0.062], [0.83, 0.078], [0.9, 0.082], [0.945, 0.072], [0.97, 0.05],
        [0.97, -0.05], [0.945, -0.072], [0.9, -0.082], [0.83, -0.078], [0.81, -0.062], [0.79, -0.05], [0, -0.05],
      ];
      const discGeo = keep(new THREE.LatheGeometry(profile.map(([x, y]) => new THREE.Vector2(x, y)), small ? 72 : 128));
      discGeo.rotateX(Math.PI / 2); // axis → Z, front face toward the camera
      const edgeGeo = keep(new THREE.CylinderGeometry(0.972, 0.972, 0.1, small ? 96 : 192, 1, true));
      edgeGeo.rotateX(Math.PI / 2);
      const rimGeo = keep(new THREE.TorusGeometry(0.935, 0.0065, 8, 160));
      const bezelGeo = keep(new THREE.TorusGeometry(0.885, 0.05, 32, 220));
      // Polished bezel ring in the brand accent; a faint inner glow in dark mode only.
      const bezelMat = keep(new THREE.MeshPhysicalMaterial({ metalness: 0.7, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1, emissive: INDIGO }));

      // ───────── relief symbols (icon units, roughly -1..1) ─────────
      const W = 0.13;
      const TH = 0.62; // stroke thinning: fine line-art symbols, as engraved and lit from within
      const circle = (x: number, y: number, r: number) => {
        const s = new THREE.Shape();
        s.absarc(x, y, r, 0, Math.PI * 2, false);
        return s;
      };
      const line = (x1: number, y1: number, x2: number, y2: number, w = W) => {
        w *= TH;
        const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
        const nx = (-dy / len) * (w / 2), ny = (dx / len) * (w / 2);
        const s = new THREE.Shape([
          new THREE.Vector2(x1 + nx, y1 + ny), new THREE.Vector2(x2 + nx, y2 + ny),
          new THREE.Vector2(x2 - nx, y2 - ny), new THREE.Vector2(x1 - nx, y1 - ny),
        ]);
        return [s, circle(x1, y1, w / 2), circle(x2, y2, w / 2)];
      };
      const arc = (cx: number, cy: number, r: number, a0: number, a1: number, w = W) => {
        w *= TH;
        const s = new THREE.Shape();
        s.absarc(cx, cy, r + w / 2, a0, a1, false);
        s.absarc(cx, cy, r - w / 2, a1, a0, true);
        return [s, circle(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, w / 2), circle(cx + Math.cos(a1) * r, cy + Math.sin(a1) * r, w / 2)];
      };
      const ring = (cx: number, cy: number, r: number, w = W) => {
        w *= TH;
        const s = circle(cx, cy, r + w / 2);
        const h = new THREE.Path();
        h.absarc(cx, cy, r - w / 2, 0, Math.PI * 2, true);
        s.holes.push(h);
        return [s];
      };
      const box = (x: number, y: number, w: number, h: number, t = W, rad = 0.08) => {
        t *= TH;
        const rr = (p: T.Path, x0: number, y0: number, ww: number, hh: number, r: number) => {
          p.moveTo(x0 + r, y0);
          p.lineTo(x0 + ww - r, y0);
          p.quadraticCurveTo(x0 + ww, y0, x0 + ww, y0 + r);
          p.lineTo(x0 + ww, y0 + hh - r);
          p.quadraticCurveTo(x0 + ww, y0 + hh, x0 + ww - r, y0 + hh);
          p.lineTo(x0 + r, y0 + hh);
          p.quadraticCurveTo(x0, y0 + hh, x0, y0 + hh - r);
          p.lineTo(x0, y0 + r);
          p.quadraticCurveTo(x0, y0, x0 + r, y0);
        };
        const s = new THREE.Shape();
        rr(s, x - t / 2, y - t / 2, w + t, h + t, rad + t / 2);
        const hole = new THREE.Path();
        rr(hole, x + t / 2, y + t / 2, w - t, h - t, Math.max(0.01, rad - t / 2));
        s.holes.push(hole);
        return [s];
      };

      // Every symbol maps to a request type or step named in src/content/FACTS.md:
      //   brand      → ZapBuzzer bell logo        coffee     → Pantry (coffee, tea, snacks)
      //   print      → Print room (PDF → copies)   it         → IT support (monitor + wrench)
      //   facilities → Facilities (AC unit with airflow, "AC too cold")   courier → Courier pickup (delivery truck)
      //   assign     → First-accept-wins (whoever accepts owns the request)
      const ICONS: Record<string, T.Shape[]> = {
        coffee: [
          ...line(-0.55, 0.32, 0.35, 0.32), ...line(-0.55, 0.32, -0.45, -0.4), ...line(0.35, 0.32, 0.25, -0.4), ...line(-0.45, -0.4, 0.25, -0.4),
          ...arc(0.36, -0.02, 0.2, -Math.PI / 2, Math.PI / 2),
          ...line(-0.75, -0.62, 0.55, -0.62),
          ...arc(-0.28, 0.6, 0.1, -Math.PI / 2, Math.PI / 2, 0.09), ...arc(0.04, 0.6, 0.1, -Math.PI / 2, Math.PI / 2, 0.09),
        ],
        // Print room — classic printer: paper in at the top, a printed sheet out of the bottom.
        print: [
          ...line(-0.8, 0.3, 0.8, 0.3), ...line(-0.8, 0.3, -0.8, -0.3), ...line(0.8, 0.3, 0.8, -0.3),
          ...line(-0.8, -0.3, -0.44, -0.3), ...line(0.44, -0.3, 0.8, -0.3),
          ...line(-0.44, 0.3, -0.44, 0.74), ...line(-0.44, 0.74, 0.44, 0.74), ...line(0.44, 0.74, 0.44, 0.3),
          ...line(-0.44, -0.08, 0.44, -0.08), ...line(-0.44, -0.08, -0.44, -0.78), ...line(0.44, -0.08, 0.44, -0.78), ...line(-0.44, -0.78, 0.44, -0.78),
          ...line(-0.24, -0.34, 0.24, -0.34, 0.09), ...line(-0.24, -0.54, 0.1, -0.54, 0.09), circle(0.58, 0.1, 0.07),
        ],
        // IT support — a computer monitor with a wrench: the universal "IT help" glyph.
        it: [
          ...box(-0.82, -0.18, 1.64, 0.96, W, 0.1), ...line(0, -0.2, 0, -0.5), ...line(-0.38, -0.56, 0.38, -0.56),
          ...line(-0.4, -0.02, 0.1, 0.36, 0.16), ...arc(0.22, 0.46, 0.17, 1.25, 0.35 + Math.PI * 2, 0.13),
        ],
        // Facilities: a wall-mounted AC unit (body, louvre slot, status light) blowing three wavy
        // streams of cool air ("AC too cold"). Waves, not straight lines, so it can't read as a cursor.
        facilities: [
          ...box(-0.82, 0.2, 1.64, 0.56, W, 0.16), ...line(-0.56, 0.36, 0.56, 0.36, 0.08), circle(0.6, 0.6, 0.055),
          ...[-0.44, 0, 0.44].flatMap((x) => [
            ...arc(x, -0.06, 0.1, Math.PI / 2, (3 * Math.PI) / 2, 0.1),
            ...arc(x, -0.26, 0.1, -Math.PI / 2, Math.PI / 2, 0.1),
            ...arc(x, -0.46, 0.1, Math.PI / 2, (3 * Math.PI) / 2, 0.1),
          ]),
        ],
        // Courier pickup — a delivery truck.
        courier: [
          ...box(-0.86, -0.3, 1.08, 0.8, W, 0.06),
          ...line(0.22, 0.24, 0.56, 0.24), ...line(0.56, 0.24, 0.86, -0.04), ...line(0.86, -0.04, 0.86, -0.3), ...line(0.22, -0.3, 0.86, -0.3),
          ...line(0.36, 0.1, 0.54, 0.1, 0.08), ...ring(-0.5, -0.44, 0.15), ...ring(0.56, -0.44, 0.15),
        ],
        assign: [
          ...ring(-0.18, 0.36, 0.24), ...arc(-0.18, -0.6, 0.52, 0.12, Math.PI - 0.12),
          ...line(0.32, -0.08, 0.5, -0.26, 0.12), ...line(0.5, -0.26, 0.86, 0.14, 0.12),
        ],
        brand: [
          ...arc(0, 0.08, 0.5, 0, Math.PI), ...line(-0.5, 0.08, -0.53, -0.3), ...line(0.5, 0.08, 0.53, -0.3),
          ...line(-0.53, -0.3, -0.7, -0.48), ...line(0.53, -0.3, 0.7, -0.48), ...line(-0.7, -0.5, 0.7, -0.5),
          circle(0, 0.66, 0.085),
          ...line(-0.22, 0.24, 0.22, 0.24, 0.1), ...line(0.22, 0.24, -0.22, -0.24, 0.1), ...line(-0.22, -0.24, 0.24, -0.24, 0.1),
        ],
      };
      const reliefGeo = (shapes: T.Shape[], scale: number) => {
        const g = keep(new THREE.ExtrudeGeometry(shapes, { depth: 0.06, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 2, curveSegments: small ? 10 : 18 }));
        g.scale(scale, scale, scale);
        return g;
      };

      const makeDisc = (icon: string, r: number) => {
        const g = new THREE.Group();
        const body = new THREE.Mesh(discGeo, bodyMat);
        const edge = new THREE.Mesh(edgeGeo, edgeMat);
        const relief = new THREE.Mesh(reliefGeo(ICONS[icon], 0.5), chromeMat);
        relief.position.z = 0.045;
        const front = new THREE.Mesh(rimGeo, glowBlue);
        front.position.z = 0.074;
        const back = new THREE.Mesh(rimGeo, glowViolet);
        back.position.z = -0.074;
        g.add(body, edge, relief, front, back);
        if (icon === "brand") {
          // The centre disc's signature: a thick bezel ring lit white-blue from within.
          const bezel = new THREE.Mesh(bezelGeo, bezelMat);
          bezel.position.z = 0.06;
          g.add(bezel);
          const clapper = new THREE.Mesh(reliefGeo([circle(0, -0.68, 0.11)], 0.5), orangeMat);
          clapper.position.z = 0.045;
          g.add(clapper);
        }
        g.scale.setScalar(r);
        return g;
      };

      // ───────── composition ─────────
      const stage = new THREE.Group();
      scene.add(stage);

      const hero = makeDisc("brand", 1.0);
      hero.position.set(0, 0.45, 0.1);
      stage.add(hero);

      // Glowing light for orbit rings and plinth edges: additive in dark mode, solid indigo in light.
      const ringMat = keep(new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }));

      // Stepped plinth: three machined tiers, each with a lit top edge that breathes gently.
      const plinthMat = keep(new THREE.MeshPhysicalMaterial({ metalness: 1, roughness: 0.4, clearcoat: 0.4, envMapIntensity: 0.6 }));
      const seg = small ? 72 : 144;
      const tiers = [
        { r: 1.25, h: 0.16, top: -1.0 },
        { r: 1.75, h: 0.18, top: -1.16 },
        { r: 2.35, h: 0.34, top: -1.34 },
      ].map(({ r, h, top }) => {
        const body = new THREE.Mesh(keep(new THREE.CylinderGeometry(r, r + 0.04, h, seg)), plinthMat);
        body.position.y = top - h / 2;
        const edge = new THREE.Mesh(keep(new THREE.TorusGeometry(r, 0.014, 8, 220)), ringMat);
        edge.rotation.x = Math.PI / 2;
        edge.position.y = top;
        stage.add(body, edge);
        return edge;
      });

      // Compact circuit board glowing behind the centre disc: dense orthogonal traces and pads
      // on a grid, brightest at the centre and fading out.
      const traces = canvasTex(1024, 1024, (c) => {
        let seed = 11;
        const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
        const G = 16; // grid pitch
        c.strokeStyle = "rgba(110,150,255,1)";
        c.fillStyle = "rgba(150,185,255,1)";
        c.lineWidth = 2;
        for (let i = 0; i < 420; i++) {
          let x = Math.round((80 + rnd() * 864) / G) * G, y = Math.round((80 + rnd() * 864) / G) * G;
          c.beginPath();
          c.moveTo(x, y);
          let horiz = rnd() > 0.5;
          for (let s = 0; s < 3; s++) {
            const len = G * (1 + Math.floor(rnd() * 5)) * (rnd() > 0.5 ? 1 : -1);
            if (horiz) x += len; else y += len;
            c.lineTo(x, y);
            horiz = !horiz;
          }
          c.stroke();
          c.fillRect(x - 3, y - 3, 6, 6);
        }
        // pad arrays, like chip pins
        for (let i = 0; i < 26; i++) {
          const x0 = Math.round((150 + rnd() * 724) / G) * G, y0 = Math.round((150 + rnd() * 724) / G) * G;
          for (let k = 0; k < 6; k++) c.fillRect(x0 + k * 8, y0, 4, 4);
        }
      });
      const traceUniforms = { uTex: { value: traces }, uTime: { value: 0 }, uColor: { value: new THREE.Vector3() }, uAlpha: { value: 0 } };
      const traceMat = keep(
        new THREE.ShaderMaterial({
          uniforms: traceUniforms,
          transparent: true,
          depthWrite: false,
          vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
          fragmentShader: `
            uniform sampler2D uTex; uniform float uTime; uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv;
            void main(){
              float d = length(vUv - 0.5);
              float mask = smoothstep(0.5, 0.06, d);
              float wave = fract(uTime * 0.06);
              float pulse = exp(-pow((d - wave * 0.5) * 16.0, 2.0)) * (1.0 - wave);
              float a = texture2D(uTex, vUv).a;
              gl_FragColor = vec4(uColor, a * mask * uAlpha * (0.35 + pulse * 0.65));
            }`,
        }),
      );
      const backdrop = new THREE.Mesh(keep(new THREE.PlaneGeometry(5.4, 5.4)), traceMat);
      backdrop.position.set(0, 0.1, -1.5);
      stage.add(backdrop);

      // Soft accent halo behind the centre disc.
      const haloUniforms = { uColor: { value: new THREE.Vector3() }, uAlpha: { value: 0 } };
      const halo = new THREE.Mesh(
        keep(new THREE.PlaneGeometry(6, 6)),
        keep(
          new THREE.ShaderMaterial({
            uniforms: haloUniforms,
            transparent: true,
            depthWrite: false,
            vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
            fragmentShader: "uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; gl_FragColor = vec4(uColor, pow(max(0.0, 1.0 - d), 2.2) * uAlpha); }",
          }),
        ),
      );
      halo.position.set(0, 0.25, -1.0);
      stage.add(halo);

      // Contact shadows: soft ellipses grounding the plinth and the bell disc on its top tier.
      // One cheap transparent quad each, no shadow maps.
      const shadowUniforms = { uColor: { value: new THREE.Vector3() }, uAlpha: { value: 0 } };
      const shadowMat = keep(
        new THREE.ShaderMaterial({
          uniforms: shadowUniforms,
          transparent: true,
          depthWrite: false,
          vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
          fragmentShader: "uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; gl_FragColor = vec4(uColor, smoothstep(1.0, 0.35, d) * uAlpha); }",
        }),
      );
      const floorShadow = new THREE.Mesh(keep(new THREE.PlaneGeometry(5.6, 5.6)), shadowMat);
      floorShadow.rotation.x = -Math.PI / 2;
      floorShadow.position.y = -1.675;
      const topShadow = new THREE.Mesh(keep(new THREE.PlaneGeometry(2.2, 1.0)), shadowMat);
      topShadow.rotation.x = -Math.PI / 2;
      topShadow.position.set(0, -0.995, 0.1);
      stage.add(floorShadow, topShadow);

      // Ten discs on a slow wheel arching behind the centre disc; the lower half of the wheel runs
      // below the frame, so discs rise in on one side and sink out on the other.
      const SAT = ["coffee", "print", "it", "facilities", "courier", "assign"];
      // Orbit plane, tilted so the far side rises: the discs and the glowing rings share it.
      const orbitGroup = new THREE.Group();
      orbitGroup.position.y = -0.5;
      orbitGroup.rotation.x = 0.36;
      stage.add(orbitGroup);
      // Partial arcs at different radii; spinning them makes the light visibly travel round the orbit.
      const rings = [
        { r: 1.0, arc: 1.55, speed: 0.22, tube: 0.009 },
        { r: 1.16, arc: 1.2, speed: -0.15, tube: 0.006 },
        { r: 0.86, arc: 0.9, speed: 0.34, tube: 0.004 },
        { r: 1.3, arc: 0.7, speed: -0.26, tube: 0.003 },
      ].map(({ r, arc, speed, tube }) => {
        const m = new THREE.Mesh(keep(new THREE.TorusGeometry(r, tube, 8, 260, Math.PI * arc)), ringMat);
        m.rotation.x = Math.PI / 2;
        orbitGroup.add(m);
        return { m, speed };
      });
      // Small glass beads riding the orbit, between the discs.
      const beadMat = keep(new THREE.MeshPhysicalMaterial({ roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.3 }));
      const beadGeo = keep(new THREE.SphereGeometry(1, 32, 24));
      const beads = [0.5, 1.6, 2.7, 3.9, 5.2].map((a, i) => {
        const m = new THREE.Mesh(beadGeo, beadMat);
        m.scale.setScalar(i % 2 ? 0.07 : 0.11);
        orbitGroup.add(m);
        return { m, a, r: i % 2 ? 1.16 : 1.0 };
      });
      const sats = SAT.map((icon, i) => {
        const d = makeDisc(icon, 0.6);
        orbitGroup.add(d);
        return { d, phase: (i / SAT.length) * Math.PI * 2, spin: 0.22 + (i % 3) * 0.09, wob: i * 1.7 };
      });

      // ───────── theme: follows the site's light/dark switch live ─────────
      // Reads the same `html.dark` class the site's ThemeToggle and no-flash script set. A switch
      // blends every colour and strength over ~0.5s; the reflection environment changes at the
      // midpoint while reflections are dipped, so there is no visible pop.
      let renderOnce = () => {};
      const isDark = () => document.documentElement.classList.contains("dark");
      const ca = new THREE.Color(), cb = new THREE.Color();
      const mixHex = (a: number, b: number, t: number) => ca.set(a).lerp(cb.set(b), t).getHex();
      const mix = (a: number, b: number, t: number) => a + (b - a) * t;
      const mixLook = (a: Look, b: Look, t: number): Look => ({
        exposure: mix(a.exposure, b.exposure, t), body: mixHex(a.body, b.body, t), bodyMetal: mix(a.bodyMetal, b.bodyMetal, t),
        edge: mixHex(a.edge, b.edge, t), mark: mixHex(a.mark, b.mark, t), markMetal: mix(a.markMetal, b.markMetal, t),
        markGlow: mix(a.markGlow, b.markGlow, t), bezel: mixHex(a.bezel, b.bezel, t), bezelGlow: mix(a.bezelGlow, b.bezelGlow, t),
        rim: mixHex(a.rim, b.rim, t), rimA: mix(a.rimA, b.rimA, t), rimBackA: mix(a.rimBackA, b.rimBackA, t),
        plinth: mixHex(a.plinth, b.plinth, t), plinthMetal: mix(a.plinthMetal, b.plinthMetal, t), bump: mix(a.bump, b.bump, t),
        trace: [0, 1, 2].map((i) => mix(a.trace[i], b.trace[i], t)) as Look["trace"], traceA: mix(a.traceA, b.traceA, t),
        halo: [0, 1, 2].map((i) => mix(a.halo[i], b.halo[i], t)) as Look["halo"], haloA: mix(a.haloA, b.haloA, t),
        clapperGlow: mix(a.clapperGlow, b.clapperGlow, t),
        bead: mixHex(a.bead, b.bead, t), beadMetal: mix(a.beadMetal, b.beadMetal, t), bodyGlow: mix(a.bodyGlow, b.bodyGlow, t),
        ringK: mix(a.ringK, b.ringK, t), shadow: [0, 1, 2].map((i) => mix(a.shadow[i], b.shadow[i], t)) as Look["shadow"], shadowA: mix(a.shadowA, b.shadowA, t),
      });
      const fade = { from: isDark() ? DARK : LIGHT, to: isDark() ? DARK : LIGHT, toDark: isDark(), start: -1 };
      const FADE_MS = 520;
      let themeActive = true; // first frame applies the initial theme
      /** Applies the current point of the theme blend; returns true while still blending. */
      const stepTheme = (now: number) => {
        const t = fade.start < 0 || reduce ? 1 : Math.min(1, (now - fade.start) / FADE_MS);
        const e = t * t * (3 - 2 * t);
        const L = mixLook(fade.from, fade.to, e);
        scene.environment = e < 0.5 ? (fade.toDark ? envLight : envDark) : fade.toDark ? envDark : envLight;
        if (t >= 1) scene.environment = fade.toDark ? envDark : envLight;
        const dip = t < 1 ? 1 - Math.sin(Math.PI * e) * 0.6 : 1;
        bodyMat.envMapIntensity = dip;
        edgeMat.envMapIntensity = 1.2 * dip;
        writeLook(L);
        return t < 1;
      };
      const writeLook = (L: Look) => {
        renderer.toneMappingExposure = L.exposure;
        bodyMat.color.set(L.body);
        bodyMat.metalness = L.bodyMetal;
        bodyMat.bumpScale = L.bump;
        edgeMat.color.set(L.edge);
        chromeMat.color.set(L.mark);
        chromeMat.metalness = L.markMetal;
        chromeMat.emissiveIntensity = L.markGlow;
        bezelMat.color.set(L.bezel);
        bezelMat.emissiveIntensity = L.bezelGlow;
        orangeMat.emissiveIntensity = L.clapperGlow;
        glowBlue.color.set(L.rim);
        glowBlue.opacity = L.rimA;
        ringMat.color.set(L.rim);
        ringMat.opacity = Math.min(1, L.rimA * L.ringK);
        const blend = isDark() ? THREE.AdditiveBlending : THREE.NormalBlending;
        if (ringMat.blending !== blend) { ringMat.blending = blend; ringMat.needsUpdate = true; }
        glowViolet.opacity = L.rimBackA;
        plinthMat.color.set(L.plinth);
        plinthMat.metalness = L.plinthMetal;
        traceUniforms.uColor.value.set(...L.trace);
        traceUniforms.uAlpha.value = L.traceA;
        haloUniforms.uColor.value.set(...L.halo);
        haloUniforms.uAlpha.value = L.haloA;
        shadowUniforms.uColor.value.set(...L.shadow);
        shadowUniforms.uAlpha.value = L.shadowA;
        // a soft white self-light in light mode reads as frosted glass instead of grey metal
        bodyMat.emissive.set(0xffffff);
        bodyMat.emissiveIntensity = L.bodyGlow;
        plinthMat.emissive.set(0xffffff);
        plinthMat.emissiveIntensity = L.bodyGlow * 0.8;
        beadMat.color.set(L.bead);
        beadMat.metalness = L.beadMetal;
      };
      const applyTheme = () => {
        const dark = isDark();
        if (dark === fade.toDark && fade.start >= 0) return; // class changed for another reason
        const now = performance.now();
        fade.from = fade.start < 0 ? (dark ? DARK : LIGHT) : mixLook(fade.from, fade.to, Math.min(1, (now - fade.start) / FADE_MS));
        fade.to = dark ? DARK : LIGHT;
        fade.toDark = dark;
        fade.start = now;
        themeActive = true;
        if (reduce || !visible) {
          stepTheme(now + FADE_MS);
          renderOnce();
        }
      };
      fade.start = performance.now() - FADE_MS; // initial theme: applied immediately
      const themeObs = new MutationObserver(applyTheme);
      themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

      // ───────── layout: place the sculpture beside (desktop) or below (mobile) the copy ─────────
      const CLUSTER_R = 3.1; // world-space half-width of the arrangement
      const CLUSTER_R_COMPACT = 2.6; // tighter arch on phones (see ORBIT_X)
      let compact = false; // phones: tighter arch, larger render, calmer camera
      let ORBIT_X = 2.45;
      let W_ = 1, H_ = 1;
      const layout = () => {
        W_ = el.clientWidth || 1;
        H_ = el.clientHeight || 1;
        renderer.setSize(W_, H_, false);
        camera.aspect = W_ / H_;
        const desktop = W_ >= 1024;
        compact = W_ < 640;
        ORBIT_X = compact ? 1.85 : 2.45;
        rimL.intensity = compact ? 2.3 : 1.6; // richer blue-violet rims where the object is small
        rimR.intensity = compact ? 1.6 : 1.1;
        // Centred beneath the copy, inside the space the hero reserves at the bottom (matches its pb-*).
        const stageH = desktop ? 490 : W_ >= 640 ? 440 : 340; // must match the hero section's pb-* values
        const cx = W_ * 0.5;
        // The plinth hangs below the cluster centre, so aim a little above the band middle;
        // otherwise the sculpture sat low, leaving a blank strip under the copy and a cropped base.
        const cy = H_ - stageH * (desktop ? (W_ < 1200 ? 0.41 : 0.47) : compact ? 0.47 : 0.5);
        const rpx = compact ? Math.min(W_ * 0.46, stageH * 0.64) : Math.min(W_ * (desktop ? 0.27 : 0.44), stageH * (desktop ? 0.74 : 0.64));
        const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        baseDist = ((compact ? CLUSTER_R_COMPACT : CLUSTER_R) * (H_ / 2)) / (tan * rpx);
        camera.setViewOffset(W_, H_, W_ / 2 - cx, H_ / 2 - cy, W_, H_);
        camera.updateProjectionMatrix();
      };
      let baseDist = 12;

      // ───────── interaction ─────────
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onPointer = (e: PointerEvent) => {
        mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
      };
      if (!reduce) window.addEventListener("pointermove", onPointer, { passive: true });

      let visible = true;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
      io.observe(el);

      const clock = new THREE.Clock();
      let raf = 0;
      const render = (time: number) => {
        // centre disc: slow turn so light sweeps across the relief, gentle float
        hero.rotation.y = Math.sin(time * 0.33) * 0.42;
        hero.rotation.x = Math.sin(time * 0.21) * 0.05;
        hero.position.y = 0.45 + Math.sin(time * 0.7) * 0.035;

        // carousel: request discs circle the bell on the tilted orbit, upright and facing the viewer,
        // passing in front of and behind it; the light arcs travel round at their own speeds.
        const orbit = time * 0.16;
        for (const s of sats) {
          const th = orbit + s.phase;
          s.d.position.set(Math.sin(th) * ORBIT_X, 0.05 + Math.sin(time * 0.8 + s.wob) * 0.04, Math.cos(th) * ORBIT_X);
          s.d.scale.setScalar(compact ? 0.48 : 0.6);
          s.d.rotation.set(-orbitGroup.rotation.x, -Math.sin(th) * 0.45 + Math.sin(time * s.spin + s.wob) * 0.12, 0);
        }
        for (const b of beads) {
          const th = orbit * 1.35 + b.a;
          b.m.position.set(Math.sin(th) * ORBIT_X * b.r, 0.02 + Math.sin(time * 0.9 + b.a) * 0.05, Math.cos(th) * ORBIT_X * b.r);
        }
        for (const g of rings) {
          g.m.scale.setScalar(ORBIT_X);
          g.m.rotation.z = time * g.speed;
        }
        // plinth edges breathe softly, outer tiers slightly behind inner ones
        tiers.forEach((e, i) => e.scale.setScalar(1 + Math.sin(time * 1.2 - i * 0.6) * 0.004));

        traceUniforms.uTime.value = time;
        if (themeActive) themeActive = stepTheme(performance.now());

        // camera: mouse parallax + scroll crane
        mouse.x += (mouse.tx - mouse.x) * 0.045;
        mouse.y += (mouse.ty - mouse.y) * 0.045;
        const sy = Math.min(window.scrollY / Math.max(H_, 1), 1) * (compact ? 0.35 : 1); // gentle crane on phones
        const dist = baseDist * (1 + sy * 0.18);
        camera.position.set(mouse.x * 0.9, 0.35 + sy * 1.4 - mouse.y * 0.5, dist);
        camera.lookAt(mouse.x * 0.25, -0.2 - sy * 0.35, 0);
        stage.rotation.y = mouse.x * 0.06;

        renderer.render(scene, camera);
      };
      renderOnce = () => {
        if (reduce) render(3.2);
      };

      const ro = new ResizeObserver(() => {
        layout();
        if (reduce) render(3.2);
      });
      ro.observe(el);
      layout();

      let lastFrame = 0;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        const now = performance.now();
        if (lowPower && now - lastFrame < 32) return; // ~30fps on low-power devices
        lastFrame = now;
        render(clock.getElapsedTime());
      };
      if (reduce) render(3.2);
      else loop();
      requestAnimationFrame(() => setReady(true));

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onPointer);
        ro.disconnect();
        io.disconnect();
        themeObs.disconnect();
        disposables.forEach((d) => d.dispose());
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const handle = idle ? idle(() => void start()) : window.setTimeout(() => void start(), 150);
    return () => {
      disposed = true;
      if (!idle) clearTimeout(handle);
      cleanup();
    };
  }, []);

  return (
    <div
      ref={host}
      className={`hero-discs ${ready ? "is-ready" : ""} ${className || "relative"}`}
      role="img"
      aria-label="3D scene: a machined metal disc bearing the ZapBuzzer bell, circled by discs embossed with the office requests ZapBuzzer routes: a coffee cup for the pantry, a printer for the print room, a monitor with a wrench for IT support, an AC unit blowing cool air for facilities, a delivery truck for courier pickups, and a person with a tick for first-accept assignment"
    >
      <style>{`.hero-discs canvas{opacity:0;transition:opacity 1.6s ease}.hero-discs.is-ready canvas{opacity:1}`}</style>
    </div>
  );
}
