import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(distDir, reqPath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    // SPA fallback
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (err) {
    res.writeHead(500);
    res.end(`Server Error: ${err.code}`);
  }
});

server.listen(4199, '127.0.0.1', async () => {
  console.log('Test static server running on http://127.0.0.1:4199');

  const assetsToCheck = [
    '/',
    '/robots.txt',
    '/sitemap.xml',
    '/favicon.ico',
    '/favicon.png',
    '/favicon.svg',
    '/logo.png',
    '/fonts/barlow-condensed-700.woff2',
    '/fonts/jakarta-400.woff2',
    '/fonts/jakarta-600.woff2',
    '/images/hero.webp',
    '/images/hero.jpg',
    '/images/entrada.webp',
    '/images/acompanhamento.jpg',
    '/images/logo-display.webp',
    '/videos/studio-tour.mp4',
    '/videos/studio-coaching.mp4',
    '/videos/studio-tour-poster.webp',
    '/videos/studio-coaching-poster.webp',
    '/rota-inexistente-spa-fallback',
  ];

  // Also extract assets referenced in index.html
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const assetRegex = /(?:src|href)="(\/assets\/[^"]+)"/g;
  let match;
  while ((match = assetRegex.exec(indexHtml)) !== null) {
    assetsToCheck.push(match[1]);
  }

  let passed = 0;
  let failed = 0;

  for (const urlPath of assetsToCheck) {
    try {
      const res = await fetch(`http://127.0.0.1:4199${urlPath}`);
      if (res.status === 200) {
        const bytes = (await res.arrayBuffer()).byteLength;
        console.log(`[PASS] ${urlPath} -> 200 OK (${bytes} bytes)`);
        passed++;
      } else {
        console.error(`[FAIL] ${urlPath} -> HTTP ${res.status}`);
        failed++;
      }
    } catch (e) {
      console.error(`[ERROR] ${urlPath} -> ${e.message}`);
      failed++;
    }
  }

  server.close(() => {
    console.log(`\nResults: ${passed} passed, ${failed} failed.`);
    if (failed > 0) process.exit(1);
    else process.exit(0);
  });
});
