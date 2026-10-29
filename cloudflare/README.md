# Cabeceras de seguridad con Cloudflare (Transform Rule)

GitHub Pages no permite configurar cabeceras HTTP. Con una **Transform Rule** de Cloudflare, cada respuesta
del dominio añade estas cabeceras. No hace falta Worker.

- `Content-Security-Policy: frame-ancestors 'self'` y `X-Frame-Options: SAMEORIGIN`: impiden embeber la web desde otros sitios (clickjacking). El iframe de las demos en las páginas de proyecto sigue funcionando, porque es del mismo origen.
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=300` (empezar con 5 minutos; subir a `max-age=31536000` cuando todo funcione durante un tiempo)

## Puesta en marcha

1. Añade `carlosaldanacv.com` a Cloudflare y cambia los nameservers en el registrador.
2. En DNS, pon en modo proxy (nube naranja) los registros de GitHub Pages.
3. En SSL/TLS, elige el modo **Full (strict)**.
4. Ve a **Rules → Transform Rules → Modify Response Header** y pulsa **Create rule**.
5. Aplícala a **All incoming requests** y, en **Then… Set static**, añade las cinco cabeceras de arriba.
6. Guarda y despliega la regla.

## Comprobación

    curl -sI https://carlosaldanacv.com/demo/tachocross.html | grep -iE "frame|content-security|x-content|referrer|strict"

Debe mostrar `x-frame-options: SAMEORIGIN`, `content-security-policy: frame-ancestors 'self'`, `x-content-type-options: nosniff`, `referrer-policy` y `strict-transport-security`.

## Pendiente

- Las Transform Rules se configuran en Cloudflare, no en el repositorio. Esta carpeta solo documenta el procedimiento.
