"use client";

import { useEffect, useRef, useState } from "react";
import type * as T from "three";

/**
 * Homepage hero — "The Request Line": one custom-built product film.
 *
 * Three machined stations sit on a satin table, joined by a lit rail:
 *
 *   REQUEST HUB  →  TEAM DOCK  →  COMPLETED TRAY
 *
 * A physical request card is printed out of the hub's slot (REQUEST), glides to
 * the team dock where every member is notified and the first to accept lifts off
 * the dock and locks onto the card as its owner (ASSIGN OWNER). The SLA ring on
 * the card starts (START TIMER), the progress bar fills while the card travels
 * the rail (TRACK PROGRESS), and it settles onto the completed stack, which then
 * sinks one level so the loop is seamless (COMPLETED). Each loop is a different
 * real-world request. The card face is the product UI, drawn live.
 *
 * Everything is modelled in code. Studio reflections, soft contact shadows, a
 * moving under-glow, spring physics, mouse parallax and a gentle scroll crane.
 * Loads after first paint, pauses off-screen, one still frame for reduced motion.
 */

type Pal = {
  floor: string; floorLine: string; pool: string; fog: number; metal: number; cardBody: number;
  bg1: string; bg2: string; line: string; text: string; muted: string; accent: string; blue: string; violet: string; success: string; track: string; tile: string;
};
const DARK: Pal = {
  floor: "#0d1020", floorLine: "#1b2036", pool: "#232850", fog: 0x0b0d16, metal: 0x1e2442, cardBody: 0x181d36,
  bg1: "#1d2346", bg2: "#141932", line: "#30386a", text: "#eef0ff", muted: "#9ba0c4", accent: "#8b8eff", blue: "#60a5fa", violet: "#a78bfa", success: "#34d399", track: "#2a3058", tile: "#262d58",
};
const LIGHT: Pal = {
  floor: "#eceef7", floorLine: "#d7d9ea", pool: "#ffffff", fog: 0xeef0f8, metal: 0xd3d7e9, cardBody: 0xf4f5fb,
  bg1: "#ffffff", bg2: "#f4f5fc", line: "#e1e3f0", text: "#141627", muted: "#6b6f86", accent: "#5c5fe6", blue: "#2563eb", violet: "#7c3aed", success: "#16a36b", track: "#e3e5f1", tile: "#eef0ff",
};

type Req = { title: string; where: string; from: string; team: string; owner: number; icon: "cup" | "print" | "wifi"; took: number };
const REQUESTS: Req[] = [
  { title: "2× Black Coffee", where: "Boss Cabin", from: "Aarav", team: "Pantry", owner: 0, icon: "cup", took: 192 },
  { title: "Print 40 Copies", where: "Conference B", from: "Neha", team: "Admin", owner: 2, icon: "print", took: 228 },
  { title: "Wi-Fi Is Down", where: "Desk 14", from: "Kabir", team: "IT", owner: 1, icon: "wifi", took: 174 },
];
const PEOPLE = [
  { name: "Arjun", initial: "A", c1: "#5c5fe6", c2: "#a855f7" },
  { name: "Manoj", initial: "M", c1: "#0ea5e9", c2: "#6366f1" },
  { name: "Sunita", initial: "S", c1: "#8b5cf6", c2: "#d946ef" },
];
const SLA = 300;
const STATUS = ["New", "Assigned", "In progress", "Completed"];

const LOOP = 14;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const easeOut = (t: number) => 1 - (1 - t) ** 3;
const seg = (t: number, a: number, b: number, f = easeInOut) => f(clamp01((t - a) / (b - a)));
/** Damped spring settling from 0 to 1. */
const spring = (t: number) => (t <= 0 ? 0 : 1 - Math.exp(-6 * t) * Math.cos(9 * t));
const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// Card face geometry: canvas px ↔ card-local units.
const CW = 1024;
const CH = 640;
const FACE_W = 2.32;
const FACE_H = 1.45;
const SLOT = { x: 130, y: 318, r: 62 };

export function HeroScene({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      const [THREE, { RoomEnvironment }, { RoundedBoxGeometry }] = await Promise.all([
        import("three"),
        import("three/addons/environments/RoomEnvironment.js"),
        import("three/addons/geometries/RoundedBoxGeometry.js"),
      ]);
      await document.fonts?.ready;
      if (disposed || !host.current) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = window.innerWidth < 768;
      const isDark = () => document.documentElement.classList.contains("dark");
      let pal = isDark() ? DARK : LIGHT;
      const fontBody = getComputedStyle(document.body).fontFamily || "Inter, system-ui, sans-serif";
      const fontHead = getComputedStyle(document.documentElement).getPropertyValue("--font-poppins").trim() || fontBody;
      const disposables: { dispose(): void }[] = [];
      const keep = <D extends { dispose(): void }>(d: D) => (disposables.push(d), d);

      // ───────── renderer, scene, camera ─────────
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      el.appendChild(renderer.domElement);
      renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envTex;
      scene.fog = new THREE.Fog(pal.fog, 16, 32);

      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      const CAM = { dist: 13, height: 7, look: new THREE.Vector3(0.2, 0.8, 0.2) };

      // Lighting: soft overhead key (shadows), cool sky fill, violet rim, and a
      // small blue under-glow that travels with the card.
      const key = new THREE.SpotLight(0xffffff, 240, 40, Math.PI / 4.5, 0.7, 1.6);
      key.position.set(2, 11, 4);
      key.castShadow = true;
      key.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048);
      key.shadow.bias = -0.0004;
      key.shadow.radius = 6;
      scene.add(key, key.target);
      const hemi = new THREE.HemisphereLight(0xe6e8ff, 0x262248, 0.6);
      scene.add(hemi);
      const rim = new THREE.DirectionalLight(0xa9a0ff, 1.1);
      rim.position.set(-7, 5, -7);
      scene.add(rim);
      const glow = new THREE.PointLight(0x6d7bff, 0, 4.5, 1.6);
      scene.add(glow);

      const world = new THREE.Group();
      scene.add(world);

      // Station positions (a shallow triangle: front-left → back → front-right).
      const H = new THREE.Vector3(-1.75, 0, 1.25);
      const D = new THREE.Vector3(0.25, 0, -1.85);
      const TR = new THREE.Vector3(2.15, 0, 1.15);
      const YAW = 0.3; // stations face the camera's resting angle

      // ───────── canvas helpers ─────────
      const canvasTex = (w: number, h: number, draw: (c: CanvasRenderingContext2D, W: number, H: number) => void) => {
        const cv = document.createElement("canvas");
        cv.width = w;
        cv.height = h;
        const c = cv.getContext("2d")!;
        const tex = keep(new THREE.CanvasTexture(cv));
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        const redraw = () => {
          c.clearRect(0, 0, w, h);
          draw(c, w, h);
          tex.needsUpdate = true;
        };
        redraw();
        return { tex, redraw };
      };
      const text = (c: CanvasRenderingContext2D, s: string, x: number, y: number, size: number, color: string, weight = 600, head = false, align: CanvasTextAlign = "left", spacing = 0) => {
        c.font = `${weight} ${size}px ${head ? fontHead : fontBody}`;
        c.fillStyle = color;
        c.textAlign = align;
        c.textBaseline = "middle";
        (c as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = `${spacing}px`;
        c.fillText(s, x, y);
        (c as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = "0px";
      };
      const boltPath = (c: CanvasRenderingContext2D, x: number, y: number, s: number) => {
        c.beginPath();
        [[0.12, -0.5], [-0.3, 0.06], [-0.02, 0.06], [-0.12, 0.5], [0.3, -0.08], [0.02, -0.08]].forEach(([px, py], i) => (i ? c.lineTo(x + px * s, y + py * s) : c.moveTo(x + px * s, y + py * s)));
        c.closePath();
      };
      const icon = (c: CanvasRenderingContext2D, kind: Req["icon"], x: number, y: number, color: string) => {
        c.save();
        c.strokeStyle = color;
        c.fillStyle = color;
        c.lineWidth = 6;
        c.lineCap = "round";
        c.lineJoin = "round";
        if (kind === "cup") {
          c.beginPath();
          c.roundRect(x - 22, y - 12, 36, 34, [4, 4, 12, 12]);
          c.stroke();
          c.beginPath();
          c.arc(x + 18, y + 3, 9, -Math.PI / 2, Math.PI / 2);
          c.stroke();
          for (const dx of [-10, 0]) {
            c.beginPath();
            c.moveTo(x + dx - 2, y - 20);
            c.quadraticCurveTo(x + dx + 4, y - 26, x + dx, y - 32);
            c.stroke();
          }
        } else if (kind === "print") {
          c.strokeRect(x - 14, y - 28, 28, 16);
          c.beginPath();
          c.roundRect(x - 26, y - 12, 52, 26, 6);
          c.stroke();
          c.strokeRect(x - 14, y + 6, 28, 20);
        } else {
          for (const r of [30, 20, 10]) {
            c.beginPath();
            c.arc(x, y + 18, r, -Math.PI * 0.78, -Math.PI * 0.22);
            c.stroke();
          }
          c.beginPath();
          c.arc(x, y + 18, 4, 0, Math.PI * 2);
          c.fill();
        }
        c.restore();
      };

      type CardState = { status: number; notifying: boolean; owner: boolean; sla: number; slaDraw: number; prog: number };
      /** The request card face — this is ZapBuzzer's actual UI, drawn for the 3D card. */
      const drawCard = (c: CanvasRenderingContext2D, req: Req, st: CardState) => {
        const done = st.status === 3;
        const statusCol = [pal.accent, pal.violet, pal.blue, pal.success][st.status];
        // panel
        const g = c.createLinearGradient(0, 0, 0, CH);
        g.addColorStop(0, pal.bg1);
        g.addColorStop(1, pal.bg2);
        c.beginPath();
        c.roundRect(4, 4, CW - 8, CH - 8, 54);
        c.fillStyle = g;
        c.fill();
        c.lineWidth = 4;
        c.strokeStyle = done ? pal.success : pal.line;
        c.globalAlpha = done ? 0.6 : 1;
        c.stroke();
        c.globalAlpha = 1;
        // header
        c.beginPath();
        c.roundRect(56, 46, 100, 100, 28);
        c.fillStyle = pal.tile;
        c.fill();
        icon(c, req.icon, 106, 100, pal.accent);
        text(c, req.title, 186, 80, 62, pal.text, 700, true);
        text(c, `${req.where} · from ${req.from}`, 188, 132, 32, pal.muted, 500);
        // status pill
        c.font = `700 28px ${fontBody}`;
        const pw = c.measureText(STATUS[st.status]).width + 74;
        c.beginPath();
        c.roundRect(CW - 56 - pw, 52, pw, 54, 27);
        c.fillStyle = statusCol;
        c.globalAlpha = 0.16;
        c.fill();
        c.globalAlpha = 1;
        c.beginPath();
        c.arc(CW - 56 - pw + 30, 79, 8, 0, Math.PI * 2);
        c.fillStyle = statusCol;
        c.fill();
        text(c, STATUS[st.status], CW - 56 - pw + 48, 80, 28, statusCol, 700);
        // divider
        c.fillStyle = pal.line;
        c.fillRect(56, 192, CW - 112, 3);
        // owner slot (the 3D token docks here)
        c.beginPath();
        c.arc(SLOT.x, SLOT.y, SLOT.r, 0, Math.PI * 2);
        c.lineWidth = 4;
        c.strokeStyle = st.owner ? statusCol : pal.muted;
        c.setLineDash(st.owner ? [] : [12, 10]);
        c.globalAlpha = st.owner ? 0.55 : 0.6;
        c.stroke();
        c.setLineDash([]);
        c.globalAlpha = 1;
        text(c, "OWNER", 228, 262, 22, pal.muted, 700, false, "left", 3);
        if (st.owner) {
          text(c, PEOPLE[req.owner].name, 226, 312, 50, pal.text, 700, true);
          text(c, `${req.team} · accepted first`, 228, 362, 30, pal.muted, 500);
        } else if (st.notifying) {
          text(c, `Notifying ${req.team}…`, 226, 312, 42, pal.text, 600, true);
          text(c, "First to accept owns it", 228, 362, 30, pal.muted, 500);
        } else {
          text(c, "Unassigned", 226, 312, 42, pal.muted, 600, true);
          text(c, `Routing to ${req.team}`, 228, 362, 30, pal.muted, 500);
        }
        // SLA ring
        const rx = 862;
        const ry = 318;
        c.lineWidth = 14;
        c.lineCap = "round";
        c.beginPath();
        c.arc(rx, ry, 76, 0, Math.PI * 2);
        c.strokeStyle = pal.track;
        c.stroke();
        if (st.slaDraw > 0) {
          const frac = (st.sla / SLA) * st.slaDraw;
          c.beginPath();
          c.arc(rx, ry, 76, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * frac);
          c.strokeStyle = done ? pal.success : pal.accent;
          c.stroke();
        }
        c.lineCap = "butt";
        text(c, st.slaDraw > 0 ? mmss(st.sla) : "5:00", rx, ry - 4, 40, st.slaDraw > 0 ? pal.text : pal.muted, 700, true, "center");
        text(c, done ? "DONE" : "SLA", rx, ry + 36, 20, pal.muted, 700, false, "center", 3);
        // progress
        const x0 = 72;
        const x1 = CW - 72;
        const by = 482;
        c.beginPath();
        c.roundRect(x0, by - 6, x1 - x0, 12, 6);
        c.fillStyle = pal.track;
        c.fill();
        if (st.prog > 0) {
          const pg = c.createLinearGradient(x0, 0, x1, 0);
          pg.addColorStop(0, pal.accent);
          pg.addColorStop(1, done ? pal.success : pal.blue);
          c.beginPath();
          c.roundRect(x0, by - 6, Math.max(12, (x1 - x0) * st.prog), 12, 6);
          c.fillStyle = pg;
          c.fill();
        }
        ["Requested", "Assigned", "In progress", "Done"].forEach((s, i) => {
          const x = x0 + ((x1 - x0) * i) / 3;
          const on = st.prog >= i / 3 - 0.001 && (i > 0 || st.prog > 0 || st.status >= 0);
          c.beginPath();
          c.arc(x, by, 15, 0, Math.PI * 2);
          c.fillStyle = on ? (done ? pal.success : pal.accent) : pal.bg1;
          c.fill();
          c.lineWidth = 4;
          c.strokeStyle = on ? (done ? pal.success : pal.accent) : pal.track;
          c.stroke();
          text(c, s, x, by + 56, 27, on ? pal.text : pal.muted, on ? 600 : 500, false, i === 0 ? "left" : i === 3 ? "right" : "center");
        });
        // last line
        text(c, done ? `Completed in ${mmss(req.took)} · no phone calls` : st.owner ? "Live · everyone can see where it is" : "One tap · routed automatically", 72, 590, 26, pal.muted, 500);
      };

      // ───────── the table ─────────
      const floorUniforms = {
        uColor: { value: new THREE.Color(pal.floor) },
        uLine: { value: new THREE.Color(pal.floorLine) },
        uPool: { value: new THREE.Color(pal.pool) },
        uAccent: { value: new THREE.Color(pal.accent) },
        uCenter: { value: new THREE.Vector2(H.x, -H.z) },
        uRipple: { value: -10 },
        uRippleFade: { value: 0 },
      };
      const floor = new THREE.Mesh(
        keep(new THREE.CircleGeometry(16, 96)),
        keep(
          new THREE.ShaderMaterial({
            uniforms: floorUniforms,
            transparent: true,
            depthWrite: false,
            vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
            fragmentShader: /* glsl */ `
              uniform vec3 uColor; uniform vec3 uLine; uniform vec3 uPool; uniform vec3 uAccent;
              uniform vec2 uCenter; uniform float uRipple; uniform float uRippleFade;
              varying vec2 vP;
              void main(){
                float r = length(vP - vec2(0.2, -0.1));
                vec2 g = abs(fract(vP * 1.0) - 0.5);
                float grid = 1.0 - smoothstep(0.0, 0.02, min(g.x, g.y));
                vec3 col = mix(uColor, uLine, grid * 0.5 * smoothstep(8.5, 2.0, r));
                col = mix(col, uPool, smoothstep(5.0, 0.0, r) * 0.6);
                float d = length(vP - uCenter) - uRipple;
                float band = exp(-d * d * 90.0) * smoothstep(3.6, 1.0, uRipple);
                col = mix(col, uAccent, clamp(band * uRippleFade, 0.0, 1.0) * 0.3);
                gl_FragColor = vec4(col, smoothstep(8.0, 3.8, r));
                #include <colorspace_fragment>
              }`,
          }),
        ),
      );
      floor.rotation.x = -Math.PI / 2;
      world.add(floor);
      const catcher = new THREE.Mesh(keep(new THREE.CircleGeometry(9, 64)), keep(new THREE.ShadowMaterial({ opacity: 0.26 })));
      catcher.rotation.x = -Math.PI / 2;
      catcher.position.y = 0.003;
      catcher.receiveShadow = true;
      world.add(catcher);

      // Engraved floor captions in front of each station.
      const captions: { redraw(): void }[] = [];
      const caption = (label: string, at: T.Vector3, dz: number) => {
        const t = canvasTex(512, 72, (c, W, Hh) => text(c, label, W / 2, Hh / 2, 30, pal.muted, 700, false, "center", 8));
        captions.push(t);
        const m = new THREE.Mesh(keep(new THREE.PlaneGeometry(1.9, 0.27)), keep(new THREE.MeshBasicMaterial({ map: t.tex, transparent: true, opacity: 0.8, toneMapped: false, depthWrite: false })));
        m.rotation.set(-Math.PI / 2, YAW, 0, "YXZ");
        m.position.set(at.x + Math.sin(YAW) * dz, 0.006, at.z + Math.cos(YAW) * dz);
        world.add(m);
      };
      caption("REQUEST HUB", H, 1.05);
      caption("TEAM", D, 0.75);
      caption("COMPLETED", TR, 1.18);

      // ───────── materials ─────────
      const metalMat = keep(new THREE.MeshPhysicalMaterial({ color: pal.metal, metalness: 0.75, roughness: 0.32, clearcoat: 0.7, clearcoatRoughness: 0.18 }));
      const glowMat = (color: string) => keep(new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0, toneMapped: false, depthWrite: false }));
      const station = (w: number, h: number, d: number, at: T.Vector3) => {
        const m = new THREE.Mesh(keep(new RoundedBoxGeometry(w, h, d, 5, Math.min(0.09, h / 2.2))), metalMat);
        m.position.set(at.x, h / 2, at.z);
        m.rotation.y = YAW;
        m.castShadow = true;
        m.receiveShadow = true;
        world.add(m);
        return m;
      };
      /** A thin light strip along a station's front edge. */
      const strip = (w: number, at: T.Vector3, dz: number, y: number, color: string) => {
        const mat = glowMat(color);
        const m = new THREE.Mesh(keep(new THREE.PlaneGeometry(w, 0.035)), mat);
        m.rotation.y = YAW;
        m.position.set(at.x + Math.sin(YAW) * dz, y, at.z + Math.cos(YAW) * dz);
        world.add(m);
        return mat;
      };

      // ───────── REQUEST HUB ─────────
      const HUB_H = 0.34;
      station(2.55, HUB_H, 1.55, H);
      const hubFace = canvasTex(1024, 300, (c, W, Hh) => {
        c.beginPath();
        c.roundRect(4, 4, W - 8, Hh - 8, 40);
        c.fillStyle = pal.bg1;
        c.globalAlpha = isDark() ? 0.55 : 0.85;
        c.fill();
        c.globalAlpha = 1;
        c.beginPath();
        c.roundRect(48, 70, 160, 160, 40);
        const g = c.createLinearGradient(48, 70, 208, 230);
        g.addColorStop(0, "#6366f1");
        g.addColorStop(1, "#a855f7");
        c.fillStyle = g;
        c.fill();
        boltPath(c, 128, 150, 110);
        c.fillStyle = "#ffffff";
        c.fill();
        text(c, "Request hub", 248, 118, 58, pal.text, 700, true);
        text(c, "Coffee · Prints · IT · Facilities", 250, 186, 32, pal.muted, 500);
        c.beginPath();
        c.arc(W - 90, 118, 12, 0, Math.PI * 2);
        c.fillStyle = pal.success;
        c.fill();
        text(c, "Live", W - 116, 118, 30, pal.success, 700, false, "right");
      });
      const hubFaceMesh = new THREE.Mesh(keep(new THREE.PlaneGeometry(2.2, 0.645)), keep(new THREE.MeshBasicMaterial({ map: hubFace.tex, transparent: true, toneMapped: false })));
      hubFaceMesh.rotation.order = "YXZ";
      hubFaceMesh.rotation.set(-Math.PI / 2, YAW, 0);
      const hubFaceOff = 0.32;
      hubFaceMesh.position.set(H.x + Math.sin(YAW) * hubFaceOff, HUB_H + 0.002, H.z + Math.cos(YAW) * hubFaceOff);
      world.add(hubFaceMesh);
      // The print slot: a dark recess with a light lip, behind the face panel.
      const slotOff = -0.42;
      const slotMat = keep(new THREE.MeshBasicMaterial({ color: 0x05060c }));
      const slot = new THREE.Mesh(keep(new THREE.PlaneGeometry(2.5 - 0.06, 0.09)), slotMat);
      slot.rotation.order = "YXZ";
      slot.rotation.set(-Math.PI / 2, YAW, 0);
      slot.position.set(H.x + Math.sin(YAW) * slotOff, HUB_H + 0.003, H.z + Math.cos(YAW) * slotOff);
      slot.scale.x = 2.48 / 2.44;
      world.add(slot);
      const slotGlowMat = glowMat(pal.accent);
      const slotGlow = new THREE.Mesh(keep(new THREE.PlaneGeometry(2.46, 0.16)), slotGlowMat);
      slotGlow.rotation.copy(slot.rotation);
      slotGlow.position.copy(slot.position).setY(HUB_H + 0.004);
      world.add(slotGlow);
      const hubStrip = strip(2.2, H, 0.78, 0.15, pal.accent);

      // ───────── TEAM DOCK ─────────
      const DOCK_H = 0.2;
      station(2.45, DOCK_H, 0.95, D);
      const dockStrip = strip(2.1, D, 0.48, 0.1, pal.violet);
      const faceTex = PEOPLE.map((p) =>
        canvasTex(256, 256, (c, W) => {
          const g = c.createLinearGradient(0, 0, W, W);
          g.addColorStop(0, p.c1);
          g.addColorStop(1, p.c2);
          c.beginPath();
          c.arc(W / 2, W / 2, W / 2 - 2, 0, Math.PI * 2);
          c.fillStyle = g;
          c.fill();
          text(c, p.initial, W / 2, W / 2 + 6, 124, "#ffffff", 800, true, "center");
        }),
      );
      const tokenBodyMat = keep(new THREE.MeshPhysicalMaterial({ color: 0xf6f7fc, roughness: 0.3, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.12 }));
      const tokenCyl = keep(new THREE.CylinderGeometry(0.31, 0.31, 0.1, 64));
      const tokens = PEOPLE.map((p, i) => {
        const g = new THREE.Group();
        const body = new THREE.Mesh(tokenCyl, tokenBodyMat);
        body.rotation.x = Math.PI / 2;
        body.castShadow = true;
        g.add(body);
        const face = new THREE.Mesh(keep(new THREE.CircleGeometry(0.26, 64)), keep(new THREE.MeshBasicMaterial({ map: faceTex[i].tex, toneMapped: false })));
        face.position.z = 0.052;
        g.add(face);
        // notification halo behind the token
        const haloMat = glowMat(pal.accent);
        const halo = new THREE.Mesh(keep(new THREE.RingGeometry(0.34, 0.39, 64)), haloMat);
        halo.position.z = 0.0;
        g.add(halo);
        const lx = (i - 1) * 0.74;
        const home = new THREE.Vector3(D.x + Math.cos(YAW) * lx, DOCK_H + 0.33, D.z - Math.sin(YAW) * lx);
        const homeQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.28, YAW, 0, "YXZ"));
        g.position.copy(home);
        g.quaternion.copy(homeQ);
        world.add(g);
        return { g, haloMat, home, homeQ };
      });
      // Little cradles the tokens stand in.
      const cradleGeo = keep(new THREE.BoxGeometry(0.5, 0.05, 0.16));
      tokens.forEach((tk) => {
        const m = new THREE.Mesh(cradleGeo, metalMat);
        m.position.set(tk.home.x, DOCK_H + 0.025, tk.home.z);
        m.rotation.y = YAW;
        m.castShadow = true;
        world.add(m);
      });

      // ───────── COMPLETED TRAY ─────────
      const TRAY_H = 0.26;
      station(2.75, TRAY_H, 1.85, TR);
      const trayStrip = strip(2.4, TR, 0.93, 0.13, pal.success);

      // ───────── request cards ─────────
      const cardGeo = keep(new RoundedBoxGeometry(2.4, 0.045, 1.52, 4, 0.02));
      const faceGeo = keep(new THREE.PlaneGeometry(FACE_W, FACE_H));
      const makeCard = () => {
        const g = new THREE.Group();
        g.rotation.order = "YXZ";
        const bodyMat = keep(new THREE.MeshPhysicalMaterial({ color: pal.cardBody, metalness: 0.2, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.08, transparent: true }));
        const body = new THREE.Mesh(cardGeo, bodyMat);
        body.castShadow = true;
        body.receiveShadow = true;
        g.add(body);
        const st: { req: Req; s: CardState } = { req: REQUESTS[0], s: { status: 0, notifying: false, owner: false, sla: SLA, slaDraw: 0, prog: 0 } };
        const tex = canvasTex(CW, CH, (c) => drawCard(c, st.req, st.s));
        const faceMat = keep(new THREE.MeshBasicMaterial({ map: tex.tex, transparent: true, toneMapped: false }));
        const face = new THREE.Mesh(faceGeo, faceMat);
        face.rotation.x = -Math.PI / 2;
        face.position.y = 0.0235;
        g.add(face);
        world.add(g);
        return { g, bodyMat, faceMat, st, redraw: tex.redraw };
      };
      const done = (req: Req): CardState => ({ status: 3, notifying: false, owner: true, sla: SLA - req.took, slaDraw: 1, prog: 1 });
      const card = makeCard();
      // Completed stack: three cards that are always "already done".
      const stack = [makeCard(), makeCard(), makeCard()];
      const STACK_Y = (k: number) => TRAY_H + 0.03 + k * 0.058;
      stack.forEach((s, k) => {
        s.g.position.set(TR.x, STACK_Y(k), TR.z);
        s.g.rotation.set(0, YAW + (k - 1) * 0.025, 0);
      });
      const slotLocal = new THREE.Vector3(((SLOT.x / CW) - 0.5) * FACE_W, 0.023 + 0.052, ((SLOT.y / CH) - 0.5) * FACE_H);
      const TOKEN_ON_CARD = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
      const TOKEN_SCALE = (SLOT.r / CW) * FACE_W / 0.31;

      // ───────── the rail ─────────
      const railCurve = new THREE.CatmullRomCurve3([
        H.clone().add(new THREE.Vector3(0.9, 0, -0.9)),
        new THREE.Vector3(-0.4, 0, -0.9),
        D.clone().add(new THREE.Vector3(0.2, 0, 0.6)),
        new THREE.Vector3(1.55, 0, -0.55),
        TR.clone().add(new THREE.Vector3(-0.3, 0, -1.05)),
      ]);
      railCurve.points.forEach((p) => p.setY(0.012));
      const railUniforms = { uLit: { value: 0 }, uPulse: { value: -1 }, uBase: { value: new THREE.Color(pal.track) }, uColor: { value: new THREE.Color(pal.accent) }, uFade: { value: 1 } };
      const rail = new THREE.Mesh(
        keep(new THREE.TubeGeometry(railCurve, 160, 0.028, 8, false)),
        keep(
          new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            uniforms: railUniforms,
            vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
            fragmentShader: /* glsl */ `
              uniform float uLit; uniform float uPulse; uniform vec3 uBase; uniform vec3 uColor; uniform float uFade; varying vec2 vUv;
              void main(){
                float lit = step(vUv.x, uLit) * uFade;
                float head = exp(-pow((vUv.x - uLit) * 22.0, 2.0)) * step(0.001, uLit) * uFade;
                float pulse = exp(-pow((vUv.x - uPulse) * 30.0, 2.0));
                vec3 col = mix(uBase, uColor, clamp(lit + head + pulse, 0.0, 1.0));
                col += uColor * (head + pulse) * 0.5;
                gl_FragColor = vec4(col, 0.7 + 0.3 * clamp(lit + head + pulse, 0.0, 1.0));
                #include <colorspace_fragment>
              }`,
          }),
        ),
      );
      world.add(rail);

      // Card flight paths.
      const hubHover = new THREE.Vector3(H.x, 1.75, H.z - 0.25);
      const dockHover = new THREE.Vector3(D.x, 1.95, D.z + 0.35);
      const trayHover = new THREE.Vector3(TR.x, 1.35, TR.z);
      const flyA = new THREE.CatmullRomCurve3([hubHover, new THREE.Vector3(-0.85, 2.15, -0.45), dockHover]);
      const flyB = new THREE.CatmullRomCurve3([dockHover, new THREE.Vector3(1.45, 2.05, -0.35), trayHover]);

      // ───────── theme ─────────
      let renderOnce = () => {};
      const applyTheme = () => {
        pal = isDark() ? DARK : LIGHT;
        (scene.fog as T.Fog).color.set(pal.fog);
        floorUniforms.uColor.value.set(pal.floor);
        floorUniforms.uLine.value.set(pal.floorLine);
        floorUniforms.uPool.value.set(pal.pool);
        floorUniforms.uAccent.value.set(pal.accent);
        railUniforms.uBase.value.set(pal.track);
        railUniforms.uColor.value.set(pal.accent);
        metalMat.color.set(pal.metal);
        hemi.intensity = isDark() ? 0.6 : 0.9;
        [card, ...stack].forEach((c) => {
          c.bodyMat.color.set(pal.cardBody);
          c.redraw();
        });
        slotMat.color.set(isDark() ? 0x05060c : 0xa3a8c4);
        slotGlowMat.color.set(pal.accent);
        hubStrip.color.set(pal.accent);
        dockStrip.color.set(pal.violet);
        trayStrip.color.set(pal.success);
        tokens.forEach((t) => t.haloMat.color.set(pal.accent));
        hubFace.redraw();
        captions.forEach((c) => c.redraw());
        renderOnce();
      };

      // ───────── layout: right half on desktop, below the copy on phones ─────────
      const layout = () => {
        const w = el.clientWidth || 1;
        const h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        if (w >= 1024) {
          camera.setViewOffset(w, h, -w * 0.27, -h * 0.02, w, h);
          world.scale.setScalar(0.93);
          CAM.dist = 13.2;
          CAM.height = 7.1;
        } else {
          camera.setViewOffset(w, h, 0, -h * 0.3, w, h);
          world.scale.setScalar(w < 640 ? 0.74 : 0.9);
          CAM.dist = 15.5;
          CAM.height = 8.2;
        }
        renderOnce();
      };
      layout();
      const ro = new ResizeObserver(layout);
      ro.observe(el);

      // ───────── interaction ─────────
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onPointer = (e: PointerEvent) => {
        mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("pointermove", onPointer, { passive: true });
      let visible = true;
      const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
      io.observe(el);

      // ───────── the film ─────────
      const t0 = performance.now();
      let raf = 0;
      let loopIdx = -1;
      let lastKey = "";
      let lastDraw = 0;
      const v = new THREE.Vector3();
      const q = new THREE.Quaternion();
      const e = new THREE.Euler(0, 0, 0, "YXZ");
      const slotW = new THREE.Vector3();
      const slotQ = new THREE.Quaternion();
      const liftPos = new THREE.Vector3();

      const render = () => {
        const now = performance.now();
        const time = (now - t0) / 1000;
        const t = reduce ? 8.2 : time % LOOP;
        const n = reduce ? 0 : Math.floor(time / LOOP);
        const req = REQUESTS[n % REQUESTS.length];
        const prev = REQUESTS[(n + REQUESTS.length - 1) % REQUESTS.length];

        // New loop: the card becomes the next request; the stack's top shows the
        // one that just landed, so the hand-over is invisible.
        if (n !== loopIdx) {
          loopIdx = n;
          card.st.req = req;
          stack[2].st.req = prev;
          stack[2].st.s = done(prev);
          stack[1].st.req = REQUESTS[(n + 1) % REQUESTS.length];
          stack[1].st.s = done(stack[1].st.req);
          stack[0].st.req = req;
          stack[0].st.s = done(req);
          stack.forEach((s) => s.redraw());
          lastKey = "";
        }

        // ── timeline ──
        const emerge = seg(t, 0.3, 1.5, easeOut);
        const tilt = seg(t, 1.45, 2.2);
        const a = seg(t, 2.25, 3.55);
        const notifyAt = 3.55;
        const lift = t - 3.95;
        const fly = seg(t, 4.15, 4.95);
        const assigned = t >= 4.95;
        const slaDraw = seg(t, 5.0, 5.5);
        const b = seg(t, 5.6, 10.1);
        const land = seg(t, 10.1, 10.9);
        const completed = t >= 10.55;
        const back = seg(t, 11.3, 12.3);
        const sink = seg(t, 12.6, 13.7);

        // ── card position & attitude ──
        if (t < 1.45) {
          v.set(H.x, THREE.MathUtils.lerp(-0.6, 1.4, emerge), H.z - 0.25 * Math.cos(YAW));
          e.set(Math.PI / 2, YAW, 0);
        } else if (t < 2.25) {
          v.set(H.x, THREE.MathUtils.lerp(1.4, hubHover.y, tilt), THREE.MathUtils.lerp(H.z - 0.25 * Math.cos(YAW), hubHover.z, tilt));
          e.set(THREE.MathUtils.lerp(Math.PI / 2, 0.62, tilt), YAW, 0);
        } else if (t < 5.6) {
          flyA.getPointAt(a, v);
          e.set(0.62, YAW, 0);
        } else if (t < 10.1) {
          flyB.getPointAt(b, v);
          e.set(0.62, YAW, 0);
        } else {
          const ly = STACK_Y(3 - sink);
          v.set(trayHover.x, THREE.MathUtils.lerp(trayHover.y, ly, land), trayHover.z);
          e.set(THREE.MathUtils.lerp(0.62, 0, land), YAW + 0.02 * land, 0);
        }
        const airborne = t > 1.45 && t < 10.5 ? 1 : 0;
        v.y += Math.sin(time * 1.3) * 0.035 * airborne * (1 - land);
        e.z += Math.sin(time * 0.9) * 0.018 * airborne;
        card.g.position.copy(v);
        card.g.rotation.copy(e);
        const cardOpacity = seg(t, 0.25, 0.8);
        card.bodyMat.opacity = cardOpacity;
        card.faceMat.opacity = cardOpacity;
        card.g.visible = cardOpacity > 0.001;

        // Stack sinks one level at the end of the loop; the bottom card slips into the tray.
        stack.forEach((s, k) => {
          s.g.position.y = STACK_Y(k - sink);
          const o = k === 0 ? 1 - sink : 1;
          s.bodyMat.opacity = o;
          s.faceMat.opacity = o;
        });

        // ── card face state ──
        const notifying = t >= notifyAt && !assigned;
        const status = completed ? 3 : t >= 5.6 ? 2 : assigned ? 1 : 0;
        const elapsed = completed ? req.took : clamp01((t - 5.0) / 5.55) * req.took;
        const sla = SLA - (t >= 5.0 ? elapsed : 0);
        const prog = completed ? 1 : assigned ? 1 / 3 + (2 / 3) * 0.86 * b : t > 0.3 ? 0.001 : 0;
        const keyStr = `${n}|${status}|${notifying}|${assigned}|${Math.floor(sla)}|${Math.round(prog * 80)}|${Math.round(slaDraw * 24)}`;
        if (keyStr !== lastKey && (now - lastDraw > 45 || status !== card.st.s.status)) {
          card.st.s = { status, notifying, owner: assigned, sla, slaDraw, prog };
          card.redraw();
          lastKey = keyStr;
          lastDraw = now;
        }

        // ── tokens ──
        card.g.updateMatrixWorld();
        slotW.copy(slotLocal).applyMatrix4(card.g.matrixWorld);
        slotQ.copy(card.g.quaternion).multiply(TOKEN_ON_CARD);
        tokens.forEach((tk, i) => {
          const order = (i - req.owner + 3) % 3;
          const ping = t - notifyAt - order * 0.14;
          const isOwner = i === req.owner;
          const haloOn = ping > 0 ? clamp01(ping / 0.25) * (isOwner ? (completed ? 1 - seg(t, 10.6, 11.2) : 1) : 1 - seg(t, 4.6, 5.2)) : 0;
          tk.haloMat.opacity = haloOn * (0.55 + 0.35 * Math.sin(time * 4 - i)) ;
          if (!isOwner) {
            tk.g.position.copy(tk.home);
            tk.g.position.y += ping > 0 && ping < 1 ? Math.sin(clamp01(ping / 0.5) * Math.PI) * 0.06 : 0;
            tk.g.quaternion.copy(tk.homeQ);
            tk.g.scale.setScalar(1);
            return;
          }
          liftPos.copy(tk.home);
          liftPos.y += lift > 0 ? spring(lift) * 0.32 : 0;
          if (t < 4.15) {
            tk.g.position.copy(liftPos);
            tk.g.quaternion.copy(tk.homeQ);
            tk.g.scale.setScalar(1);
          } else if (t < 11.3) {
            // Fly up and lock onto the card's owner slot; then ride with it.
            tk.g.position.lerpVectors(liftPos, slotW, fly);
            tk.g.position.y += Math.sin(fly * Math.PI) * 0.55;
            tk.g.quaternion.slerpQuaternions(tk.homeQ, slotQ, fly);
            tk.g.scale.setScalar(THREE.MathUtils.lerp(1, TOKEN_SCALE, fly));
          } else {
            // Owner is free again: back to the dock.
            tk.g.position.lerpVectors(slotW, tk.home, back);
            tk.g.position.y += Math.sin(back * Math.PI) * 0.6;
            q.copy(slotQ).slerp(tk.homeQ, back);
            tk.g.quaternion.copy(q);
            tk.g.scale.setScalar(THREE.MathUtils.lerp(TOKEN_SCALE, 1, back));
          }
          tk.g.position.y += Math.sin(time * 1.1 + i) * 0.008;
        });

        // ── light & signals ──
        slotGlowMat.opacity = (seg(t, 0.2, 0.6) * (1 - seg(t, 1.5, 2.2))) * 0.8;
        hubStrip.opacity = 0.35 + 0.5 * Math.max(0, 1 - Math.abs(t - 0.9) / 1.0);
        dockStrip.opacity = 0.25 + 0.6 * (t > notifyAt ? 1 - seg(t, 4.95, 5.8) : 0) * seg(t, notifyAt, notifyAt + 0.3);
        trayStrip.opacity = 0.25 + 0.65 * seg(t, 10.5, 10.9) * (1 - seg(t, 12.0, 13.0));
        floorUniforms.uRipple.value = t > 0.5 ? seg(t, 0.5, 2.6, easeOut) * 3.6 : -10;
        floorUniforms.uRippleFade.value = t > 0.5 ? 1 - seg(t, 1.8, 2.6) : 0;
        const railA = 0.47; // approx. arc-length position of the dock on the rail
        railUniforms.uLit.value = assigned ? railA + (1 - railA) * (completed ? 1 : b) : 0;
        railUniforms.uPulse.value = t > 2.25 && t < 3.6 ? a * railA : -1;
        railUniforms.uFade.value = 1 - seg(t, 12.2, 13.4);
        glow.position.set(card.g.position.x, card.g.position.y - 0.55, card.g.position.z);
        glow.intensity = (isDark() ? 6 : 2.5) * airborne * cardOpacity;
        glow.color.set(completed ? pal.success : pal.accent);

        // ── camera: slow drift + mouse parallax + scroll crane ──
        mouse.x += (mouse.tx - mouse.x) * 0.04;
        mouse.y += (mouse.ty - mouse.y) * 0.04;
        const sy = Math.min(window.scrollY, 900) / 900;
        const orbit = (reduce ? 0 : Math.sin(time * 0.07) * 0.08) + mouse.x * 0.14 + YAW;
        const dist = CAM.dist + sy * 2.5;
        camera.position.set(Math.sin(orbit) * dist, CAM.height + sy * 3 - mouse.y * 0.45, Math.cos(orbit) * dist);
        camera.lookAt(CAM.look.x, CAM.look.y - sy * 0.5, CAM.look.z);

        renderer.render(scene, camera);
      };
      renderOnce = () => {
        if (reduce) render();
      };
      applyTheme();
      const themeObs = new MutationObserver(applyTheme);
      themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        render();
      };
      if (reduce) render();
      else loop();
      requestAnimationFrame(() => setReady(true));

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onPointer);
        ro.disconnect();
        io.disconnect();
        themeObs.disconnect();
        disposables.forEach((d) => d.dispose());
        envTex.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const handle = idle ? idle(() => void start()) : window.setTimeout(() => void start(), 200);
    return () => {
      disposed = true;
      if (!idle) clearTimeout(handle);
      cleanup();
    };
  }, []);

  return (
    <div
      ref={host}
      className={`hero-scene ${ready ? "is-ready" : ""} ${className || "relative"}`}
      role="img"
      aria-label="3D product scene: a request card is printed by the ZapBuzzer request hub, the team is notified, the first to accept becomes its owner, the SLA timer starts, progress fills as it travels, and it lands on the completed stack"
    >
      <style>{`.hero-scene canvas{opacity:0;transition:opacity 1.4s ease}.hero-scene.is-ready canvas{opacity:1}`}</style>
    </div>
  );
}
