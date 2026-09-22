import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const moduleUrl = code => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
const compile = filePath => ts.transpileModule(fs.readFileSync(filePath, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }
}).outputText;

const businessUrl = moduleUrl(compile('src/data/business.ts'));
const { businessData: b, getWhatsAppUrl } = await import(businessUrl);
const { buildLeadMessage, leadGoals, leadShifts } = await import(moduleUrl(compile('src/data/lead.ts').replace('"./business"', JSON.stringify(businessUrl))));

// 1. WhatsApp lead generation tests
let flows = 0;
for (const preferredShift of leadShifts) {
  for (const goal of leadGoals) {
    const message = buildLeadMessage({
      name: '  Teste de revisão  ',
      phone: '(67) 99999-0000',
      preferredShift,
      goal
    });
    const url = new URL(getWhatsAppUrl(message, 'lead_modal'));
    assert.equal(url.hostname, 'wa.me');
    assert.equal(url.pathname, `/${b.contact.whatsappNumber}`);
    assert.equal(url.searchParams.get('text'), message);
    assert.equal(url.searchParams.get('utm_campaign'), 'lead_modal');
    for (const value of ['*Teste de revisão*', '(67) 99999-0000', preferredShift, goal, b.name]) {
      assert.ok(message.includes(value));
    }
    flows++;
  }
}

// 2. HTML production verification
const html = fs.readFileSync('dist/index.html', 'utf8');

// Title
assert.match(html, /<title>BS Trainer Studio \| Treino Personalizado em Campo Grande - MS<\/title>/);

// Canonical and Schema.org
const canonicalMatch = html.match(/rel="canonical" href="([^"]+)"/);
assert.ok(canonicalMatch, 'Canonical tag missing');
const canonical = canonicalMatch[1];
assert.equal(canonical, 'https://studiobstrainer.online/');

const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert.ok(ldMatch, 'JSON-LD missing');
const ld = JSON.parse(ldMatch[1]);
assert.equal(ld['@type'], 'SportsActivityLocation');
assert.equal(ld.name, b.name);
assert.equal(ld.url, canonical);
assert.equal(+ld.aggregateRating.ratingValue, b.reputation.googleRating);
assert.equal(+ld.aggregateRating.ratingCount, b.reputation.googleReviewCountApprox);

// Sitemap and Robots
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
assert.ok(sitemap.includes(canonical), 'Sitemap missing canonical url');

const robots = fs.readFileSync('dist/robots.txt', 'utf8');
assert.ok(robots.includes(canonical + 'sitemap.xml'), 'Robots.txt missing sitemap link');

// Accessibility skip link
assert.ok(html.includes('href="#conteudo-principal"'), 'Skip link missing');

// Asset existence check for root-relative paths in dist/index.html
let assets = 0;
const assetRegex = /(?:href|src)="(\/(?:assets|fonts|images|videos)\/[^"#?]+)(?:\?[^"#]*)?"/g;
let match;
while ((match = assetRegex.exec(html)) !== null) {
  const assetRelPath = match[1].replace(/^\//, '');
  const assetFullPath = path.join('dist', assetRelPath);
  assert.ok(fs.existsSync(assetFullPath), `Missing referenced asset: ${assetFullPath}`);
  assets++;
}

// Verify key brand files exist in dist
for (const file of [
  'dist/logo.png',
  'dist/favicon.png',
  'dist/favicon.svg',
  'dist/favicon.ico',
  'dist/.htaccess',
  'dist/robots.txt',
  'dist/sitemap.xml'
]) {
  assert.ok(fs.existsSync(file), `Critical dist file missing: ${file}`);
}

const result = {
  status: 'passed',
  whatsappCombinations: flows,
  canonicalDomain: canonical,
  distHtmlAssetsChecked: assets,
  verifiedAt: new Date().toISOString()
};

fs.writeFileSync('docs/redesign/contracts.json', JSON.stringify(result, null, 2) + '\n');
console.log(result);
