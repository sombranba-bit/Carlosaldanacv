// Comprobación tras `npm run build`: páginas clave, sitemap y ausencia de peticiones a Google Fonts.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const must = ['index.html', 'en/index.html', 'proyectos/index.html', 'en/proyectos/index.html', 'calculadora-plazos/index.html',
  'en/calculadora-plazos/index.html', '404.html', 'robots.txt', 'sitemap.xml', 'fonts/fonts.css', 'demo/tachocross.html', 'en/demo/tachoread.html'];
const errors = [];
for (const f of must) if (!existsSync(join(dist, f))) errors.push(`falta ${f}`);

const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
for (const loc of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = loc[1].replace('https://carlosaldanacv.com', '') || '/';
  if (!existsSync(join(dist, path === '/' ? 'index.html' : path.replace(/\/$/, '') + '/index.html'))) errors.push(`sitemap apunta a ${path} que no existe`);
}

const walk = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? walk(join(d, n)) : [join(d, n)]));
for (const f of walk(dist).filter((f) => /\.(html|css|js)$/.test(f))) {
  if (/fonts\.(googleapis|gstatic)\.com/.test(readFileSync(f, 'utf8'))) errors.push(`${f} carga Google Fonts`);
}

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('check-build: OK');
