// Lists bracketed design placeholders like "[Approved capture needed]" left in the built site.
// Exits 1 while any remain, so it can gate the public launch. Run after `npm run build`.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const placeholder = /\[[A-Z][^\]\n]{2,160}\]/g;

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

function visibleText(html) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');
}

let total = 0;
for await (const file of htmlFiles(root)) {
  const found = visibleText(await readFile(file, 'utf8')).match(placeholder) ?? [];
  if (found.length === 0) continue;
  total += found.length;
  console.log(`\n${relative(root, file)} (${found.length})`);
  for (const [text, count] of Object.entries(Object.groupBy(found, (t) => t))) {
    console.log(`  ${text}${count.length > 1 ? `  ×${count.length}` : ''}`);
  }
}

console.log(total ? `\n${total} placeholder(s) left.` : 'No placeholders left.');
process.exit(total ? 1 : 0);
