# Separación multicolor en Photoshop para serigrafía

## 1. Método recomendado: proceso simulado

Para ilustraciones complejas como las asociadas a Iron Maiden —con muchos tonos, sombras, luces y degradados— no conviene separar una tinta por cada color visible.

La estrategia recomendada para muchas aplicaciones textiles es el **proceso simulado** (_simulated process_): seleccionar un conjunto limitado de tintas y combinarlas mediante semitonos, reservas y sobreimpresiones para aproximar la imagen original.

**Una imagen puede mostrar cientos de tonos sin necesitar cientos de pantallas.** Cada pantalla corresponde a una tinta física, no a cada tono percibido.

Un punto de partida habitual es trabajar con **6 a 10 pantallas en total**, contando base blanca y blanco de luces cuando sean necesarios. La cantidad definitiva depende del arte, la prenda, las tintas y la capacidad del taller; no garantiza una reproducción exacta.

> Esta guía describe un flujo de trabajo. Sin evaluar la imagen y el equipo de impresión no se puede definir una separación lista para producción.

## 2. Diferencias frente a otras separaciones

| Método            | Uso habitual                                                          | Consideración                                                                                      |
| ----------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Colores planos    | Logos, textos y áreas uniformes                                       | Una tinta por color de impresión; puede incluir semitonos si el diseño los necesita.               |
| Cuatricromía CMYK | Reproducción con tintas de proceso, especialmente sobre fondos claros | Necesita tintas, sustrato y condiciones calibradas. Convertir a CMYK no basta.                     |
| Proceso simulado  | Ilustraciones multicolor, especialmente sobre prendas oscuras         | Usa tintas seleccionadas para el arte y separaciones tonales; suele necesitar blancos adicionales. |

**Para imágenes de este tipo, empezar por proceso simulado**, en lugar de posterizar el original o convertirlo automáticamente a CMYK. La cuatricromía también puede ser viable si el taller dispone de un proceso adecuado para ese trabajo.

## 3. Definir las condiciones de producción

Antes de separar, acordar:

- Color, composición y textura de la prenda.
- Tamaño físico final de impresión.
- Número de pantallas disponibles, incluyendo los blancos.
- Sistema de tinta: plastisol, base agua u otro.
- Colores de tinta disponibles y su comportamiento al sobreimprimirse.
- Malla, emulsión y capacidad de reproducir puntos pequeños.
- Equipo de salida a película o sistema directo a pantalla y uso de RIP.
- Orden de impresión y necesidad de secados intermedios.

En una camiseta negra, parte de las sombras puede ser **la propia tela sin imprimir**. En una camiseta blanca, las sombras negras normalmente necesitan una tinta negra. No se deben reutilizar las mismas separaciones sin revisar el cambio de soporte.

## 4. Preparar el original

1. Conservar un archivo maestro editable y trabajar sobre una copia.
2. Mantener el original en RGB durante la preparación; no convertirlo a CMYK por rutina.
3. Ajustar el documento al tamaño real de impresión. Como referencia, usar aproximadamente **300 ppp al tamaño final** cuando el original tenga ese detalle.
4. Limpiar compresión, bordes contaminados y fondos que no pertenezcan al diseño.
5. Ajustar contraste y color sin perder detalle en sombras y luces.
6. Identificar qué colores y detalles son imprescindibles y cuáles pueden aproximarse.

Cambiar la resolución o ampliar una imagen pequeña no recupera detalle perdido. La resolución del original tampoco es lo mismo que la resolución de salida de las películas.

**No aplicar Umbral a toda la ilustración:** destruiría la información tonal necesaria para los semitonos.

## 5. Elegir una paleta de tintas

Ejemplo orientativo de **8 pantallas para una prenda negra**:

| Pantalla | Tinta           | Función                                                              |
| -------- | --------------- | -------------------------------------------------------------------- |
| 1        | Blanco base     | Sostener los colores que necesitan luminosidad sobre la tela oscura. |
| 2        | Amarillo        | Luces cálidas y mezclas.                                             |
| 3        | Naranja         | Tonos cálidos intermedios si son importantes en el arte.             |
| 4        | Rojo            | Áreas rojas y mezclas cálidas.                                       |
| 5        | Azul            | Áreas y sombras cromáticas frías.                                    |
| 6        | Verde o violeta | Elegir el que aporte más al diseño; no ambos en esta misma pantalla. |
| 7        | Gris claro      | Medios tonos neutros, si el arte los necesita.                       |
| 8        | Blanco de luces | Brillos, detalles claros y blancos visibles.                         |

Esta tabla **no es una receta ni un orden obligatorio de impresión**. Según el arte, puede convenir reemplazar naranja, gris u otra tinta por negro, cian, magenta o un color específico. El orden debe comprobarse con las tintas reales.

## 6. Crear canales de tintas planas en Photoshop

### 6.1. Extraer una máscara inicial por tinta

1. Abrir **Ventana > Canales**.
2. Usar **Selección > Gama de colores** para aislar una familia cromática. Añadir muestras y ajustar la tolerancia sin invadir colores vecinos.
3. Guardar la selección como un canal alfa desde **Selección > Guardar selección**.
4. Revisar esa máscara en escala de grises. Refinarla con **Curvas**, **Niveles**, herramientas de pintura y, cuando sea útil, información de los canales RGB o **Imagen > Cálculos**.
5. Evaluar luces y sombras dentro de esa familia. Seleccionar un tono no determina automáticamente cuánto de esa tinta necesita cada zona.

Los canales RGB son fuentes de información, **no separaciones de tintas terminadas**. Tampoco basta con seleccionar rojo, azul y amarillo y asumir que reconstruirán toda la imagen.

### 6.2. Convertir la máscara a tinta plana

1. Duplicar el canal alfa para conservar una máscara editable de referencia.
2. Hacer doble clic en la copia y convertirla en **Tinta plana** en las opciones del canal.
3. Asignar un nombre inequívoco y un color de previsualización próximo a la tinta real.
4. Comprobar la polaridad. Las selecciones guardadas suelen mostrar en blanco lo seleccionado; para una separación positiva debe quedar **negro donde se imprime**. Invertir la copia cuando corresponda.
5. Repetir el proceso para cada tinta y revisar los canales individualmente y combinados.

En un canal de tinta plana de Photoshop:

- **Negro:** cobertura nominal del 100 % de esa tinta.
- **Blanco:** ausencia de esa tinta.
- **Gris:** cobertura intermedia que se reproducirá con semitonos.

> **Corrección importante respecto al método de colores planos:** conservar los grises durante la separación. Solo al generar la salida tramada se convierten en puntos negros y espacios blancos. No sustituirlos por manchas sólidas mediante Umbral.

La opción **Solidez** del canal modifica la previsualización, no los porcentajes de la separación ni la opacidad física de la tinta. La densidad tonal se controla editando el contenido del canal; el resultado real depende también de las condiciones de impresión.

## 7. Separar blanco base y blanco de luces

### Blanco base

- Crear una máscara que sostenga las áreas de color que deben destacarse sobre la tela.
- Reservar las sombras que se van a resolver con el negro de la prenda.
- Ajustar su cobertura tonal por zonas: una base excesiva puede aclarar sombras y endurecer degradados.
- Aplicar una reducción de contorno o **choke**, cuando proceda, para evitar halos blancos por desregistro.

Como referencia inicial, algunos trabajos usan un choke de aproximadamente **0,1 a 0,3 mm**, pero se debe ajustar al registro del taller y al detalle del diseño. Convertir esa medida a píxeles según la resolución del documento; no usar un número de píxeles fijo para todos los trabajos. No erosionar indiscriminadamente todos los puntos de una base tramada.

### Blanco de luces

- Separar los blancos visibles y los brillos que necesitan mayor luminosidad.
- Evitar que invada todos los medios tonos y lave los colores.
- Revisar sus reservas, sobreimpresiones y posición en la secuencia de impresión.

Los dos blancos cumplen funciones distintas. Algunas producciones pueden resolverlos de otra manera, pero unirlos sin comprobar el resultado no es una simplificación segura.

## 8. Ajustar superposiciones y detalle imprimible

1. Previsualizar las tintas sobre el color de la prenda y ocultar el original RGB para evaluar las separaciones por sí mismas.
2. Detectar zonas con acumulación de tinta o mezclas indeseadas.
3. Usar **reservas** donde una tinta deba excluir a otra y **sobreimpresión** donde la mezcla sea intencional.
4. Aplicar solapes de registro o **trapping** cuando los bordes contiguos lo necesiten.
5. Comprobar que los detalles y puntos más pequeños puedan sobrevivir a exposición, lavado e impresión.
6. Ajustar la ganancia de punto con una prueba del taller; no aplicar una curva de compensación universal.

La previsualización de Photoshop es una ayuda, **no una prueba contractual de color**. No reproduce con exactitud opacidad, mezcla, depósito de tinta, tela o curado.

## 9. Convertir los tonos a semitonos para la salida

Elegir **una sola ruta de tramado**.

### Ruta A: salida mediante RIP

- Entregar los canales tonales de tintas planas en un formato que el flujo del taller conserve y reconozca.
- Configurar en el RIP lineatura, ángulos, forma del punto, resolución y compensaciones acordadas.
- Mantener el documento maestro sin tramar para poder corregirlo.

### Ruta B: tramado manual en Photoshop

1. Duplicar cada canal de tinta en un documento independiente en escala de grises, conservando tamaño, posición y marcas de registro.
2. Verificar otra vez: negro representa tinta y blanco representa reserva.
3. En esa copia de salida, ir a **Imagen > Modo > Mapa de bits**.
4. Elegir **Trama de semitonos** y configurar resolución de salida, frecuencia, ángulo y forma del punto.
5. Guardar como TIFF de 1 bit cuando el sistema de salida lo admita.
6. Imprimir al 100 % de escala, sin reescalar, suavizar ni volver a tramar el archivo.

### Parámetros orientativos, no universales

| Parámetro            | Referencia inicial                                      | Precaución                                                                                                      |
| -------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Lineatura            | Aproximadamente 35–55 lpi para muchos trabajos textiles | Más lineatura exige mayor control del detalle; no equivale a mayor calidad automática.                          |
| Resolución de salida | Por ejemplo, 600–1200 ppp si el equipo lo admite        | Ajustar al equipo real. No confundir con los ppp del original ni con los lpi de la trama.                       |
| Forma del punto      | Redondo o elíptico                                      | Seleccionar según las pruebas y el flujo del taller.                                                            |
| Ángulos              | Esquema acordado con el taller o RIP                    | Comprobar interacción entre tintas y malla para minimizar moiré. No copiar ángulos CMYK sin evaluar el proceso. |

**No hay una combinación de malla, lpi y ángulos que funcione siempre.** La malla debe especificarse con sus unidades: hilos por centímetro e hilos por pulgada no son equivalentes.

No aplicar tramado manual y después volver a tramar en el RIP: el doble tramado puede producir moiré y deformar los puntos. Tampoco usar el filtro artístico de semitono de color como sustituto de una separación de producción.

## 10. Entrega y prueba de impresión

- Conservar un **PSD maestro** con capas y canales de tintas planas. PSD y TIFF pueden preservar estos canales; comprobar la compatibilidad y las opciones de guardado del receptor.
- Entregar separaciones tonales para RIP **o** películas ya tramadas, según lo acordado, sin mezclar los dos procedimientos.
- Usar exactamente el mismo tamaño, origen y marcas de registro en todas las pantallas.
- Identificar cada tinta y añadir una ficha con tamaño final, prenda, secuencia propuesta, blancos, trama y condiciones de salida.
- Si se producen películas, revisar densidad del negro, geometría de los puntos y polaridad según el sistema de exposición.
- Hacer una prueba sobre la prenda real con las tintas, mallas y condiciones definitivas antes de aprobar el tiraje.
- Ajustar coberturas, ganancia de punto, blancos y orden de impresión a partir de esa prueba.

### Lista de comprobación

- [ ] El número de pantallas incluye los blancos necesarios.
- [ ] Las sombras aprovechan o compensan correctamente el color de la prenda.
- [ ] Se conservaron degradados y detalle tonal antes del tramado.
- [ ] Base blanca y blanco de luces tienen funciones definidas.
- [ ] No hay halos, mezclas indeseadas ni exceso de cobertura.
- [ ] Todas las separaciones tienen el mismo registro y tamaño físico.
- [ ] La trama y los detalles mínimos son reproducibles por el taller.
- [ ] No hay doble tramado ni reescalado de películas.
- [ ] Se aprobó una prueba física de impresión.

## Resumen

**Para ilustraciones multicolor de este tipo: proceso simulado, canales de tintas planas, blancos controlados y semitonos.** El trabajo profesional consiste en decidir qué tintas reconstruyen mejor el arte y cuánto imprime cada una en cada zona, no en crear una pantalla por cada color visible.

Para concretar una separación se necesitan la imagen, el color de la prenda, el tamaño final y el máximo de pantallas disponible. Usar arte propio, autorizado o con una licencia que permita su reproducción.

## Referencias de Photoshop

- [Adobe: trabajar con canales de tintas planas](https://helpx.adobe.com/photoshop/using/printing-spot-colors.html).
- [Adobe: convertir una imagen a mapa de bits y configurar trama de semitonos](https://helpx.adobe.com/photoshop/desktop/adjust-color/color-modes/convert-an-image-to-bitmap-mode.html).

Estas referencias documentan las funciones de Photoshop. Los parámetros textiles indicados son orientativos y deben validarse con el taller.
