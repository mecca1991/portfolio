/*
 * The hero backdrop: faint stars, a glowing planet and a tilted ring of
 * particles that drifts and leans toward the cursor. It draws only while the
 * hero is on screen and the tab is visible, and holds a single still frame
 * when the visitor prefers reduced motion.
 */
const PARTICLES = 1100;
const STARS = 120;

export function startHeroCanvas(section: HTMLElement, canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const still = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  let W = 0;
  let H = 0;
  let raf = 0;
  let onScreen = true;

  // the site's accent hue is an oklch angle; the same violet in hsl sits 27 degrees lower
  const hue = () => (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--h')) || 295) - 27;

  const ring = Array.from({ length: PARTICLES }, () => ({
    a: Math.random() * Math.PI * 2,
    r: 0.82 + Math.pow(Math.random(), 1.6) * 0.75,
    s: 0.4 + Math.random() * 1.5,
    v: 0.5 + Math.random() * 0.8,
    o: 0.3 + Math.random() * 0.7,
  }));
  const stars = Array.from({ length: STARS }, () => ({
    x: Math.random(),
    y: Math.random() * 0.7,
    s: Math.random() * 1.1 + 0.2,
    p: Math.random() * 6,
  }));

  const draw = (ms: number) => {
    if (!W || !H) return;
    const t = ms / 1000;
    const h = hue();
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = '#fff';
    for (const s of stars) {
      ctx.globalAlpha = 0.25 + 0.35 * Math.sin(t * 0.8 + s.p) ** 2;
      ctx.fillRect(s.x * W, s.y * H, s.s, s.s);
    }

    const pr = Math.min(W * 0.34, 270);
    const cx = W / 2 + mouse.x * 26;
    const cy = H - 190 + mouse.y * 10;
    const R = pr * 1.35;
    const tilt = 0.2 + mouse.y * 0.1;
    const roll = -0.14 + mouse.x * 0.16;
    const cr = Math.cos(roll);
    const sr = Math.sin(roll);

    // the half of the ring behind the planet is drawn first, the front half last
    const particles = (front: boolean) => {
      ctx.fillStyle = `hsl(${h},95%,${front ? 78 : 62}%)`;
      for (const p of ring) {
        const ang = p.a + t * 0.12 * p.v;
        const sn = Math.sin(ang);
        if (sn > 0 !== front) continue;
        const x0 = Math.cos(ang) * R * p.r;
        const y0 = sn * R * p.r * tilt;
        ctx.globalAlpha = p.o * (front ? 0.95 : 0.45);
        const size = p.s * (front ? 1.25 : 0.8);
        ctx.fillRect(cx + x0 * cr - y0 * sr, cy + x0 * sr + y0 * cr, size, size);
      }
    };

    particles(false);
    ctx.globalAlpha = 1;

    ctx.save();
    ctx.shadowColor = `hsl(${h},95%,60%)`;
    ctx.shadowBlur = 70;
    const body = ctx.createRadialGradient(cx - pr * 0.25, cy - pr * 0.95, pr * 0.05, cx, cy, pr * 1.25);
    body.addColorStop(0, `hsl(${h},85%,62%)`);
    body.addColorStop(0.28, `hsl(${h},75%,24%)`);
    body.addColorStop(0.62, '#0b0716');
    body.addColorStop(1, '#07050d');
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.arc(cx, cy, pr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const rim = ctx.createLinearGradient(cx - pr, 0, cx + pr, 0);
    rim.addColorStop(0, `hsla(${h},100%,85%,0)`);
    rim.addColorStop(0.3, `hsla(${h},100%,85%,.75)`);
    rim.addColorStop(0.7, `hsla(${h},100%,85%,.75)`);
    rim.addColorStop(1, `hsla(${h},100%,85%,0)`);
    ctx.strokeStyle = rim;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(cx, cy, pr, Math.PI, Math.PI * 2);
    ctx.stroke();

    particles(true);
    ctx.globalAlpha = 1;
  };

  const frame = (ms: number) => {
    draw(ms);
    raf = requestAnimationFrame(frame);
  };

  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  // run only when it can be seen and motion is welcome; otherwise leave one frame up
  const sync = () => {
    const run = onScreen && !document.hidden && !still.matches;
    if (run && !raf) raf = requestAnimationFrame(frame);
    if (!run) {
      stop();
      if (still.matches) draw(0);
    }
  };

  const size = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!raf) draw(0);
  };

  size();
  new ResizeObserver(size).observe(canvas);

  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    sync();
  }).observe(section);
  document.addEventListener('visibilitychange', sync);
  still.addEventListener('change', sync);

  section.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const r = section.getBoundingClientRect();
    mouse.tx = ((event.clientX - r.left) / r.width) * 2 - 1;
    mouse.ty = ((event.clientY - r.top) / r.height) * 2 - 1;
  });

  sync();
}
