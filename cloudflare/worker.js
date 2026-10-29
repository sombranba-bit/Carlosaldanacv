// Worker de Cloudflare delante de GitHub Pages: añade cabeceras que Pages no permite configurar.
// Las páginas del propio sitio (incluido el iframe de las demos) siguen pudiendo embeberse; ningún otro sitio puede.
const HEADERS = {
  'Content-Security-Policy': "frame-ancestors 'self'", // el meta CSP no admite frame-ancestors
  'X-Frame-Options': 'SAMEORIGIN',                     // para navegadores antiguos
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000',
};

export default {
  async fetch(request) {
    const res = await fetch(request);
    const out = new Response(res.body, res); // mismo estado, cabeceras y cuerpo del origen
    for (const [name, value] of Object.entries(HEADERS)) out.headers.set(name, value);
    return out;
  },
};
