// Comprobación del Worker sin red: el origen se simula con un fetch falso.
import assert from 'node:assert/strict';
import worker from './worker.js';

const realFetch = globalThis.fetch;
globalThis.fetch = async () =>
  new Response('<html>ok</html>', { status: 200, headers: { 'content-type': 'text/html; charset=utf-8' } });
try {
  const res = await worker.fetch(new Request('https://carlosaldanacv.com/demo/tachocross.html'));
  assert.equal(res.status, 200);
  assert.equal(await res.text(), '<html>ok</html>');
  assert.equal(res.headers.get('content-type'), 'text/html; charset=utf-8');
  assert.equal(res.headers.get('x-frame-options'), 'SAMEORIGIN');
  assert.equal(res.headers.get('content-security-policy'), "frame-ancestors 'self'");
  assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(res.headers.get('strict-transport-security'), 'max-age=300', 'HSTS');

  globalThis.fetch = async () => new Response('nope', { status: 404 });
  const miss = await worker.fetch(new Request('https://carlosaldanacv.com/no-existe'));
  assert.equal(miss.status, 404);
  assert.equal(miss.headers.get('x-frame-options'), 'SAMEORIGIN');
  console.log('check-worker: OK');
} finally {
  globalThis.fetch = realFetch;
}
