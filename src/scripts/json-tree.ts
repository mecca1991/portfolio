/*
 * Playground logic, shared by the build (initial render) and the browser.
 * Uses the browser's JSON.parse; it does not run the Rust parser.
 */
export const SAMPLES = {
  simple: '{\n  "name": "Ada",\n  "active": true,\n  "score": 9.5\n}',
  nested: '{\n  "user": {\n    "name": "Ada",\n    "tags": ["rust", "json"]\n  },\n  "items": [1, [2, 3], null]\n}',
  error: '{\n  "name": "Ada",\n  "tags": ["rust",]\n}',
} as const;

export type SampleId = keyof typeof SAMPLES;

export const LABELS: Record<SampleId, string> = {
  simple: 'Simple object',
  nested: 'Nested values',
  error: 'Invalid input',
};

export interface Row {
  depth: number;
  key: string;
  type: string;
  value: string;
}

function typeOf(v: unknown): string {
  if (v === null) return 'Null';
  if (Array.isArray(v)) return 'Array';
  if (typeof v === 'object') return 'Object';
  if (typeof v === 'string') return 'String';
  if (typeof v === 'number') return 'Number';
  return 'Bool';
}

function walk(v: unknown, key: string | null, depth: number, out: Row[], maxDepth: number) {
  const type = typeOf(v);
  let value = '';
  if (type === 'Object') value = `(${Object.keys(v as object).length} keys)`;
  else if (type === 'Array') value = `(${(v as unknown[]).length} items)`;
  else if (type === 'String') value = JSON.stringify(v);
  else if (type !== 'Null') value = String(v);

  out.push({ depth, key: key === null ? '' : `${key}: `, type, value });

  if (depth >= maxDepth) return;
  if (type === 'Object') {
    for (const [k, child] of Object.entries(v as Record<string, unknown>)) walk(child, k, depth + 1, out, maxDepth);
  } else if (type === 'Array') {
    (v as unknown[]).forEach((child, i) => walk(child, `[${i}]`, depth + 1, out, maxDepth));
  }
}

/** Collapsed shows the top level only. */
export function parseToRows(source: string, expanded: boolean): { rows: Row[]; error: string } {
  try {
    const rows: Row[] = [];
    walk(JSON.parse(source), null, 0, rows, expanded ? 20 : 1);
    return { rows, error: '' };
  } catch (e) {
    return { rows: [], error: e instanceof Error ? e.message : String(e) };
  }
}
