# PROMPT — Claude Design / TradeUp Landing

Usa el paquete `TradeUp_Landing_Assets` como la **única fuente fotográfica principal** para la Landing de TradeUp. El brief original exige que las imágenes sean el peso visual de la experiencia: ciudad, infraestructura, retail y punto de venta reales; nada de ilustración ni iconografía decorativa. La colección debe sentirse como un mismo mundo: noche/hora azul, dominante azul y gris oscuro, alto contraste, luz artificial y personas secundarias.

## Regla principal

**NO generes, busques ni sustituyas fotografías nuevas si una pieza equivalente existe en este paquete.** Usa exactamente los assets entregados y haz solo recortes, overlays, degradados y tratamientos de opacidad necesarios para integrarlos al layout. No agregues logos de terceros ni texto dentro de las fotografías.

## Logo

Usa `logo/Logo-TradeUp_B1.png` como el logo oficial de TradeUp. **No lo redibujes, no lo recrees con texto, no lo estilices y no lo reemplaces por un logo generado.** Mantén su forma y proporciones.

## Mapeo obligatorio

- Hero desktop: `images/tu-01-header-desktop.webp` (fallback JPG).
- Hero mobile: `images/tu-01-header-mobile.webp` (fallback JPG). No uses un crop genérico del desktop si el viewport es móvil; usa el asset móvil.
- Servicio 01 — DOOH: `images/tu-02-dooh.webp`.
- Servicio 02 — Espacios y vía pública: `images/tu-03-via-publica.webp`.
- Servicio 03 — Trade Marketing: `images/tu-04-trade-marketing.webp`.
- Servicio 04 — Alianzas comerciales: `images/tu-05-alianzas.webp`.
- Servicio 05 — Soluciones a la medida: `images/tu-06-soluciones-medida.webp`.
- Tarjetas / fondos de “Para quién”: usar las texturas `tu-07`, `tu-08` y `tu-09` con **8–15% de opacidad**; no competir con el texto.

## Hero

El hero debe usar la fotografía `tu-01-header-*` como fondo a pantalla completa. Mantén el área izquierda/inferior suficientemente oscura para que el titular blanco sea legible. La web puede aplicar su velo/degradado azul-negro, pero **no tapes la fotografía con un bloque opaco que elimine su presencia**. Usa `background-size: cover`, cuidando el punto focal del billboard.

## Servicios

En el acordeón de servicios, cada panel expandido debe mostrar la foto correspondiente en el panel derecho. No mezcles dos servicios en una misma foto. La imagen debe recortarse sin deformarse (`object-fit: cover`) y conservar la sensación cinematográfica.

## Tratamiento visual

- Mantén la estética azul/negro de la Landing existente.
- No introduzcas gradientes multicolor, estética “AI”, collages, mockups, dashboards, personas mirando a cámara ni fotografías de oficina.
- No uses filtros que destruyan el detalle de las imágenes.
- La luz azul debe ser el punto más brillante, con negros profundos y reflejos controlados.
- Personas: siempre secundarias, en movimiento o de espaldas.

## Rendimiento

Preferir WebP; usar JPG como fallback. No conviertas los archivos a PNG salvo que sea estrictamente necesario para el logo. Mantén `alt` según README y no añadas alt innecesario a las texturas decorativas (`alt=""`).

## Entrega

Antes de terminar, verifica que: (1) todos los assets del mapeo están realmente usados, (2) el logo corresponde exactamente al archivo entregado, (3) desktop y móvil usan sus headers específicos, (4) no quedan placeholders fotográficos, (5) no se inventaron imágenes adicionales, y (6) ningún texto se sale de sus cajas ni se superpone de forma ilegible sobre las fotografías.
