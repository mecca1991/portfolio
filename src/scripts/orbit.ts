/*
 * Layout for the skills orbit. Chips sit on two rings (the widest on the outer
 * one), each taking arc length in proportion to its width. Before anything is
 * drawn, a full rotation is sampled for collisions: chip against chip, chip
 * against the centre label, chip against the container edge. Chips stay
 * horizontal while the rings turn, so their boxes are axis-aligned throughout.
 */
export interface Chip {
  /** index into the tools list */
  i: number;
  /** estimated width in px */
  w: number;
  /** ring radius in px */
  r: number;
  /** angle on the ring, radians */
  th: number;
}

export interface OrbitLayout {
  /** collisions counted over one rotation; 0 means it is safe to draw */
  bad: number;
  /** chip font size in px */
  f: number;
  chips: Chip[];
}

const GAP = 6;
const FONT_SIZES = [13, 12, 11, 10];
const INNER_RADII = [0.3, 0.26, 0.22];
const OUTER_RADIUS = 0.42;
const SAMPLES = 72;

const cache = new Map<string, OrbitLayout>();

/** `W` is the side of the square the orbit is drawn in. */
export function layoutOrbit(tools: readonly string[], W: number): OrbitLayout {
  const key = tools.join('|') + W;
  const hit = cache.get(key);
  if (hit) return hit;

  const n = tools.length;
  let best: OrbitLayout | null = null;

  search: for (const f of FONT_SIZES) {
    const ht = f * 1.25 + 14;
    // monospace: 0.6em a character, plus padding and border
    const ws = tools.map((t) => t.length * f * 0.6 + 27);
    const order = tools.map((_, i) => i).sort((a, b) => ws[b] - ws[a]);

    // k chips on the outer ring, from all of them down to half
    for (let k = n; k >= Math.ceil(n / 2); k--) {
      const outer = new Set(order.slice(0, k));
      const rings: number[][] = [[], []];
      tools.forEach((_, i) => rings[outer.has(i) ? 0 : 1].push(i));

      const base = rings.map((ix) => {
        const total = ix.reduce((s, i) => s + ws[i] + GAP, 0);
        let acc = 0;
        return ix.map((i) => {
          const span = ((ws[i] + GAP) / total) * Math.PI * 2;
          const th = acc + span / 2;
          acc += span;
          return th;
        });
      });

      // the inner ring is tried at three radii and twelve phases each
      const phases = rings[1].length ? 36 : 1;
      for (let p = 0; p < phases; p++) {
        const chips: Chip[] = [];
        rings[0].forEach((i, j) => chips.push({ i, w: ws[i], r: OUTER_RADIUS * W, th: base[0][j] - Math.PI / 2 }));
        rings[1].forEach((i, j) =>
          chips.push({ i, w: ws[i], r: INNER_RADII[Math.floor(p / 12)] * W, th: base[1][j] + ((p % 12) / 12) * Math.PI * 2 }),
        );

        let bad = 0;
        const limit = best ? best.bad : Infinity;
        for (let a = 0; a < SAMPLES && bad < limit; a++) {
          const al = (a / SAMPLES) * Math.PI * 2;
          const pts = chips.map((c) => [c.r * Math.cos(c.th + al), c.r * Math.sin(c.th + al)]);
          for (let x = 0; x < chips.length; x++) {
            const px = pts[x][0];
            const py = pts[x][1];
            const cw = chips[x].w;
            // the centre label
            if (Math.abs(px) < cw / 2 + 0.13 * W + 4 && Math.abs(py) < ht / 2 + 0.1 * W) bad++;
            // the container edge
            if (Math.abs(px) + cw / 2 > 0.58 * W + 16) bad++;
            // every other chip
            for (let y = x + 1; y < chips.length; y++) {
              if (Math.abs(px - pts[y][0]) < (cw + chips[y].w) / 2 + GAP && Math.abs(py - pts[y][1]) < ht + GAP) bad++;
            }
          }
        }

        if (!best || bad < best.bad) best = { bad, f, chips };
        if (best.bad === 0) break search;
      }
    }
  }

  const result = best ?? { bad: Infinity, f: FONT_SIZES[0], chips: [] };
  cache.set(key, result);
  return result;
}

/** The orbit's square: 86% of the container, at most 600px, snapped to 10px. */
export function orbitBox(containerWidth: number): number {
  return Math.max(200, Math.floor(Math.min(600, containerWidth * 0.86) / 10) * 10);
}
