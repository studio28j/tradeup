# TradeUp — Prompt para Claude Design
## Versión Oscura V2 — nueva página, NO reemplazo de V1

Adjunto este paquete de assets para construir una **nueva versión** de la Landing oscura.

### REGLA CRÍTICA
La página oscura actual debe permanecer intacta.

- NO modificar `/oscuro.html`.
- NO reemplazar la versión existente.
- Crear una página independiente, por ejemplo `/oscuro-v2.html`.
- La V2 debe reutilizar la misma arquitectura, secciones, contenido, textos y narrativa aprobados en la V1.
- La V2 es una evolución visual, no una nueva propuesta de contenido.

## Qué debe cambiar

Aumentar significativamente el impacto visual de la Landing existente mediante:

- más fotografía de gran formato;
- imágenes integradas dentro de las secciones existentes;
- composiciones fotográficas, no únicamente thumbnails;
- texturas oscuras azuladas;
- líneas de luz;
- patrones de puntos;
- geometrías sutiles;
- iconografía lineal;
- overlays y máscaras fotográficas;
- profundidad y capas;
- acentos de azul eléctrico;
- atmósfera nocturna cinematográfica;
- mayor sensación premium/editorial.

### Qué NO debe cambiar

NO agregar secciones nuevas.
NO agregar contenido nuevo.
NO inventar estadísticas.
NO cambiar los textos aprobados.
NO cambiar la jerarquía de contenidos.
NO convertir la página en una colección de cards.
NO convertir las secciones editoriales en grids de módulos.
NO copiar la estructura de la referencia mobile.
NO rediseñar la navegación desde cero.
NO sustituir la identidad TradeUp.

La referencia visual que compartimos sirve para estudiar el lenguaje gráfico: fotografía, iconos, texturas, líneas, profundidad y composición. **No copiar su arquitectura.**

## Principio de diseño

Pensar:

"Misma Landing, mayor impacto visual."

No:

"Una Landing nueva con más módulos."

Las fotografías deben formar parte de la composición de cada sección. Pueden aparecer:

- como fondos parciales;
- detrás de bloques de texto;
- como imágenes de gran formato;
- recortadas con máscaras;
- integradas con degradados;
- como imágenes laterales dentro de una sección existente;
- como bandas visuales dentro del mismo bloque.

## Mapeo obligatorio

Hero desktop:
`images/tu-dark-01-hero-desktop.webp`

Hero mobile:
`images/tu-dark-01-hero-mobile.webp`

DOOH:
`images/tu-dark-02-dooh.webp`

Espacios y vía pública:
`images/tu-dark-03-via-publica.webp`

Trade Marketing:
`images/tu-dark-04-trade-marketing.webp`

Alianzas comerciales:
`images/tu-dark-05-alianzas.webp`

Soluciones a la medida:
`images/tu-dark-06-soluciones.webp`

Imagen secundaria ciudad/movimiento:
`images/tu-dark-07-ciudad-movimiento.webp`

Imagen secundaria personas/marca:
`images/tu-dark-08-personas-marca.webp`

Texturas:
`images/tu-dark-09-textura-puntos.webp`
`images/tu-dark-10-textura-geo.webp`

Logo:
`logo/Logo-TradeUp_B1.png`

Iconos:
usar los SVG de `/icons/` como apoyo gráfico, sin convertirlos en grandes módulos.

## Tratamiento

Mantener:
- fondo negro/azul profundo;
- tipografía blanca;
- azul eléctrico como acento;
- contraste alto;
- bordes finos;
- iluminación azul;
- sensación urbana nocturna.

Evitar:
- gradientes multicolor;
- estética cyberpunk exagerada;
- exceso de glow;
- exceso de cards;
- fotografías de stock genéricas;
- grandes bloques de color que oculten las imágenes;
- elementos gráficos decorativos sin función.

## Implementación

Primero inspecciona la V1 actual y conserva su estructura.

Después crea la V2 como una ruta/página independiente.

No modifiques los archivos de la V1 salvo lo estrictamente necesario para compartir componentes o assets sin alterar su resultado.

La V2 debe poder compararse con la V1 lado a lado.

### Verificación final

Antes de terminar:

1. `/oscuro.html` sigue funcionando y visualmente igual.
2. La V2 existe en una URL/página independiente.
3. La V2 mantiene las mismas secciones y contenido.
4. Las nuevas imágenes están correctamente mapeadas.
5. Desktop y mobile utilizan sus respectivos Hero.
6. Las imágenes no están deformadas ni pixeladas.
7. Los textos no se salen de sus contenedores.
8. Las fotografías tienen presencia real en la composición.
9. Las texturas no compiten con la legibilidad.
10. La página se siente más cinematográfica y premium sin convertirse en otra arquitectura.

**Objetivo final: misma estructura y contenido de TradeUp V1 + mayor impacto visual mediante fotografía, iconografía, textura, luz y composición.**
