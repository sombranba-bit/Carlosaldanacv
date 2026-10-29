# Cabeceras de seguridad con Cloudflare

GitHub Pages no permite configurar cabeceras HTTP. Con este Worker delante del dominio, el sitio envía
`frame-ancestors 'self'` y `X-Frame-Options: SAMEORIGIN`, lo que impide embeber las páginas desde otros sitios
(clickjacking). El iframe de las demos en las páginas de proyecto sigue funcionando, porque es del mismo origen.

## Puesta en marcha (una sola vez, en tu cuenta de Cloudflare)

1. Añade `carlosaldanacv.com` a Cloudflare y cambia los nameservers en el registrador.
2. En DNS, mantén los registros que apuntan a GitHub Pages con el proxy activado (nube naranja).
3. En SSL/TLS, usa el modo "Full (strict)".
4. En Workers & Pages, crea un Worker y pega el contenido de `worker.js`.
5. Añade dos rutas: `carlosaldanacv.com/*` y `www.carlosaldanacv.com/*`, apuntando al Worker.

## Comprobación

    curl -sI https://carlosaldanacv.com/demo/tachocross.html | grep -iE "frame|content-security|x-content"

Debe mostrar `x-frame-options: SAMEORIGIN` y `content-security-policy: frame-ancestors 'self'`.
Para probar el Worker sin red: `node cloudflare/check-worker.mjs`.

## Pendiente

- El Worker no está desplegado: hace falta acceso a tu cuenta de Cloudflare y al DNS del dominio.
- Si se cambian los registros DNS, GitHub Pages puede tardar en reemitir el certificado.
