/*
 * Positions for the experience trace, shared by the build (first render) and
 * the browser (so "now" is the visitor's today, not the last deploy).
 * The axis runs from the earliest start to today.
 */
export interface Span {
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, or null for a role that runs to today */
  end: string | null;
}

export interface Tick {
  label: string;
  /** percent from the left; null pins the tick to the right edge */
  left: number | null;
}

/** Months since year 0, fractional for a full date. */
function months(value: string | Date): number {
  if (typeof value === 'string') {
    const [y, m] = value.split('-').map(Number);
    return y * 12 + (m - 1);
  }
  const days = new Date(value.getFullYear(), value.getMonth() + 1, 0).getDate();
  return value.getFullYear() * 12 + value.getMonth() + (value.getDate() - 1) / days;
}

const pct = (n: number) => Math.round(n * 1000) / 10;

export function layoutTimeline(spans: readonly Span[], today: Date) {
  const origin = Math.min(...spans.map((s) => months(s.start)));
  const now = months(today);
  const total = now - origin;

  const bars = spans.map((s) => {
    const left = (months(s.start) - origin) / total;
    const right = s.end ? (months(s.end) - origin) / total : 1;
    return { left: pct(left), width: pct(Math.min(1, right) - left) };
  });

  // the first year at the left edge, then every second January, then "now"
  const firstYear = Math.floor(origin / 12);
  const ticks: Tick[] = [{ label: String(firstYear), left: 0 }];
  for (let year = firstYear + 2; ; year += 2) {
    const at = (year * 12 - origin) / total;
    if (at > 0.9) break; // would run into "now"
    ticks.push({ label: String(year), left: pct(at) });
  }
  ticks.push({ label: 'now', left: null });

  return { bars, ticks };
}
