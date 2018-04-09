const properties = {
    flexbox: [
      {
        id: 1,
        name: "align-content",
        tag: "flexbox",
        description: "Define como se alinea dentro de un contenedor flexible (Flexible Box Layout module), solo se aplica si flex-wrap: wrap está presente y si hay varias lineas de elementos de flexbox.",
        sintaxis:"flex-start | flex-end | center | space-between | space-around | stretch",
        valueAmount: 6,
        values: [
          {
            title: "flex-start",
            content: "Se alinean al inicio del contenedor",
          },
          {
            title: "flex-end",
            content: "Se alinean al final del contenedor",
          },
          {
            title: "center",
            content: "Se alinean al centro del contenedor",
          },
          {
            title: "space-between",
            content: "Se alinean de manera uniforme, desde el inicio del contenedor y la última esta al final del contenedor.",
          },
          {
            title: "space-around",
            content: "Se distribuyen con espacios iguales entre ellas.",
          },
          {
            title: "stretch",
            content: "Se estiran para ocupar el espacio restante.",
          }
        ],
        example: "img/svg/align-content.svg",
        exampleMobile: "img/svg/align-content-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/KQvOOL",
        BrowserSupport: "https://caniuse.com/#search=align-content",
        links: [
          {
            name: "CSS-tricks",
            link: "Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          },
          {
            name: "Flexbox",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox"
          }
        ]
      },
      {
        id: 2,
        name: "align-items",
        tag: "flexbox",
        description: "Alinea los elementos flexibles en el eje transversal (por defecto, el vertical).",
        sintaxis: "flex-start | flex-end | center | baseline | stretch",
        valueAmount: 5,
        values: [
          {
            title: "flex-start",
            content: "Se alinean al inicio del contenedor",
          },
          {
            title: "flex-end",
            content: "Se alinean al final del contenedor",
          },
          {
            title: "center",
            content: "Se alinean al centro del contenedor",
          },
          {
            title: "baseline",
            content: "Se Alinea los ítems en el contenedor según la base de los ítems",
          },
          {
            title: "stretch",
            content: "Hereda el valor de align-items del padre",
          }
        ],
        example: "img/svg/align-items.svg",
        exampleMobile: "img/svg/align-items-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/qxXgNj",
        BrowserSupport: "https://caniuse.com/#search=align-items",
        links: [
          {
            name: "CSS-tricks / align items",
            link: "https://css-tricks.com/almanac/properties/a/align-items/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/align-items"
          }
        ]
      },
      {
        id: 3,
        name: "align-self",
        tag: "flexbox",
        description: "Permite anular la alineación por defecto (o la especifica de align-items) y permite alinear elementos flex individuales. Toma los mismos valores que align items, pero para un solo elemento (hijo)",
        sintaxis: "auto | flex-start | flex-end | center | baseline | stretch",
        valueAmount: 6,
        values: [
          {
            title: "auto",
            content: "Se calcula acorde al valor de align-items del padre, o al de stretch si el elemento no tiene padre.",
          },
          {
            title: "flex-start",
            content: "El elemento hijo seleccionado se alinea al inicio del contenedor",
          },
          {
            title: "flex-end",
            content: "El elemento hijo se alinea al final del contenedor",
          },
          {
            title: "center",
            content: "El elemento hijo se alinea al centro del contenedor",
          },
          {
            title: "baseline",
            content: "Se Alinea los ítems en el contenedor según la base de los ítems",
          },
          {
            title: "stretch",
            content: "Hereda el valor de align-items del padre",
          }
        ],
        example: "img/svg/align-self.svg",
        exampleMobile: "img/svg/align-self-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/Yeryro",
        BrowserSupport: "https://caniuse.com/#search=align-self",
        links: [
          {
            name: "CSS-tricks / align self",
            link: "https://css-tricks.com/almanac/properties/a/align-self/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/align-self"
          }
        ]
      },
      {
        id: 4,
        name: "flex-direction",
        tag: "flexbox",
        description: "Especifica cómo colocar los objetos flexibles en el contenedor flexible definiendo el eje principal y la dirección, puede ser normal o invertida. Hay que tener en cuenta que si el atributo dir es ltr, row representa el eje horizontal orientado de  izquierda a derecha, y row-reverse desde la derecha hacia la izquierda; Y si el atributo dir es rtl, row representa el eje orientado de derecha a izquierda, y  row-reverse de izquierda a derecha.",
        sintaxis: "row | row-reverse | column | column-reverse",
        valueAmount: 4,
        values: [
          {
            title: "row",
            content: "Este es el valor por defecto. El eje principal es horizontal. y su dirección es de izquierda a derecha",
          },
          {
            title: "row-reverse",
            content: "Se comporta igual que row pero los puntos principales de inicio y final son intercambiados. De derecha a izquierda.",
          },
          {
            title: "column",
            content: "El eje principal del contenedor flexible es el mismo que el eje del bloque. (vertical). Su dirección es de arriba hacia abajo",
          },
          {
            title: "column-reverse",
            content: "Se comporta igual que column pero los puntos principales de inicio y final son intercambiados. De abajo hacia arriba.",
          }
        ],
        example: "img/svg/flex-direction.svg",
        exampleMobile: "img/svg/flex-direction-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/aqLjPR",
        BrowserSupport: "https://caniuse.com/#search=flex-direction",
        links: [
          {
            name: "CSS-tricks / flex-direction",
            link: "https://css-tricks.com/almanac/properties/f/flex-direction/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/flex-direction"
          }
        ]
      },
      {
        id: 5,
        name: "flex-wrap",
        tag: "flexbox",
        description: "Es una propiedad del contenedor flex y define si los elementos flexibles se fuerzan en una sola línea (nowrap) o pueden fluir en múltiples líneas (wrap). El valor por defecto es nowrap.",
        sintaxis: "nowrap | wrap | wrap-reverse ",
        valueAmount: 3,
        values: [
          {
            title: "nowrap",
            content: "los elementos flex aparecen en una sola línea dentro del contenedor flex. En circumstancias el contenedor flex puede desbordar ( overflow ).",
          },
          {
            title: "wrap",
            content: "Los elementos flex son colocados en varias líneas. La dirección se define por flex-direction",
          },
          {
            title: "wrap-reverse",
            content: "Los elementos flex aparecen colocados en varias líneas, pero en orden contrario.",
          },
        ],
        example: "img/svg/flex-wrap.svg",
        exampleMobile: "img/svg/flex-wrap-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/bLomaZ",
        BrowserSupport: "https://caniuse.com/#search=flex-wrap",
        links: [
          {
            name: "CSS-tricks / flex-wrap",
            link: "https://css-tricks.com/almanac/properties/f/flex-wrap/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/flex-wrap"
          }
        ]
      },
      {
        id: 6,
        name: "flex-grow",
        tag: "flexbox",
        description: "Controla que tanto crecerá el elemento flexible para rellenar el espacio disponible. Solo se aplica si el espacio disponible es positivo.",
        sintaxis: "<número>",
        valueAmount: 1,
        values: [
          {
            title: "<número>",
            content: "indica cuantas unidades crecerá el item para calcular su tamaño final. si el número es 2 significa que el item crecerá 2 unidades.",
          },
        ],
        example: "img/svg/flex-grow.svg",
        exampleMobile: "img/svg/flex-grow-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/ZrXPPr",
        BrowserSupport: "https://caniuse.com/#search=flex-grow",
        links: [
          {
            name: "CSS-tricks / flex-grow",
            link: "https://css-tricks.com/almanac/properties/f/flex-grow/"
          },
          {
            name: "CSS-tricks / is weird. Or is it?",
            link: "https://css-tricks.com/flex-grow-is-weird/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/flex-grow"
          }
        ]
      },
      {
        id: 7,
        name: "flex-shrink",
        tag: "flexbox",
        description: "Controla cómo se encogerán los elementos en el contenedor flexible cuando no hay suficiente espacio en la fila. Para calcular el tamaño final de un item que se ha encogido, se utilizán los mismos principios de flex-grow pero en sentido opuesto.",
        sintaxis: "<número>",
        valueAmount: 1,
        values: [
          {
            title: "<número>",
            content: "Se define dividiendo el espacio disponible entre la suma de los valores de flex-shrink",
          },
        ],
        example: "img/svg/flex-shrink.svg",
        exampleMobile: "img/svg/flex-shrink-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/ZrXPPr",
        BrowserSupport: "https://caniuse.com/#search=flex-shrink",
        links: [
          {
            name: "CSS-tricks / flex-shrink",
            link: "https://css-tricks.com/almanac/properties/f/flex-shrink/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/flex-shrink"
          }
        ]
      },
      {
        id: 8,
        name: "flex-flow",
        tag: "flexbox",
        description: "Es una propiedad atajo para las propiedades individuales flex-direction y flex-wrap",
        sintaxis: " <flex-direction> || <flex-wrap>",
        valueAmount: 2,
        values: [
          {
            title: "flex-direction | flex-wrap",
            content: "Puede especificar uno o dos valores, sin importar el orden. Ve los valores de flex-direction y flex-wrap para más detalles.",
          },
        ],
        example: "img/svg/flex-flow.svg",
        exampleMobile: "img/svg/flex-flow-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/bLomaZ",
        BrowserSupport: "https://caniuse.com/#search=flex-flow",
        links: [
          {
            name: "CSS-tricks / flex-flow",
            link: "https://css-tricks.com/almanac/properties/f/flex-flow/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/flex-flow"
          },
          {
            name: "CSS-tricks / flex-direction",
            link: "https://css-tricks.com/almanac/properties/f/flex-direction/"
          },
          {
            name: "CSS-tricks / flex-wrap",
            link: "https://css-tricks.com/almanac/properties/f/flex-wrap/"
          }
        ]
      },
      {
        id: 9,
        name: "flex-basis",
        tag: "flexbox",
        description: "Define el tamaño inicial del elemento flexible, antes de que cualquier espacio disponible se distribuya de acuerdo con los factores de flexión. si el main axis es horizontal (predeterminado), flex-basis será equivalente a width y si el main axis es vertical, flex-basis será equivalente a height",
        sintaxis: "<width>",
        valueAmount: 1,
        values: [
          {
            title: "width",
            content: "Definido por un número seguido de una unidad absoluta como px, mm, pt, o %. Los valores negativos no son válidos.",
          },
        ],
        example: "img/svg/flex-basis.svg",
        exampleMobile: "img/svg/flex-basis-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/eVGqBP",
        BrowserSupport: "https://caniuse.com/#search=flex-basis",
        links: [
          {
            name: "CSS-tricks / flex-basis",
            link: "https://css-tricks.com/almanac/properties/f/flex-basis/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/flex-basis"
          }
        ]
      },
      {
        id: 10,
        name: "justify-content",
        tag: "flexbox",
        description: "Alinea los elementos flexibles en el eje principal (por defecto, el horizontal) de su contenedor.",
        sintaxis: "flex-start | flex-end | center | space-between | space-around",
        valueAmount: 5,
        values: [
          {
            title: "flex-start",
            content: "Se alinean al inicio del contenedor",
          },
          {
            title: "flex-end",
            content: "Se alinean al final del contenedor",
          },
          {
            title: "center",
            content: "Se alinean al centro del contenedor",
          },
          {
            title: "space-between",
            content: "Se alinean de manera uniforme, desde el inicio del contenedor y la última esta al final del contenedor.",
          },
          {
            title: "space-around",
            content: "Se distribuyen con espacios iguales entre ellas.",
          }
        ],
        example: "img/svg/justify-content.svg",
        exampleMobile: "img/svg/justify-content-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/KQvOOL",
        BrowserSupport: "https://caniuse.com/#search=justify-content",
        links: [
          {
            name: "CSS-tricks / justify-content",
            link: "https://css-tricks.com/almanac/properties/j/justify-content/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/justify-content"
          }
        ]
      }
    ],
    cssGrid: [
      {
        id: 11,
        name: "align-items",
        tag: "CSS Grid",
        description: "Alinea el contenido dentro de un elemento de la cuadrícula a lo largo del eje de la columna. (A diferencia de justify-items)",
        sintaxis: "start | end | center | stretch",
        valueAmount: 4,
        values: [
          {
            title: "start",
            content: "Se alinean al inicio del grid-area",
          },
          {
            title: "end",
            content: "Se alinean al final del grid-area",
          },
          {
            title: "center",
            content: "Se alinean al centro del grid-area",
          },
          {
            title: "stretch",
            content: "Llena todo el ancho del grid-area",
          }
        ],
        example: "img/svg/align-items-grid.svg",
        exampleMobile: "img/svg/align-items-grid-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/PQeKPx",
        BrowserSupport: "https://caniuse.com/#search=css%20grid",
        links: [
          {
            name: "CSS-tricks / CSS grid ",
            link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
          },
          {
            name: "Ejemplos de align-items por Rachel Andrew ",
            link: "https://gridbyexample.com/examples/example24/"
          }
        ]
      },
      {
        id: 12,
        name: "align-content",
        tag: "CSS Grid",
        description: "Similar a justify-content, pero align-content alinea la grilla a lo largo del eje de la columna",
        sintaxis: "start | end | center | stretch | space-between | space-around | space-evenly",
        valueAmount: 7,
        values: [
          {
            title: "start",
            content: "Se alinean al inicio del contenedor",
          },
          {
            title: "end",
            content: "Se alinean al final del contenedor",
          },
          {
            title: "center",
            content: "Se alinean al centro del contenedor",
          },
          {
            title: "stretch",
            content: "Cambia el tamaño de los elementos de grid para permitir que ocupe todo el ancho del contenedor del grid",
          },
          {
            title: "space-between",
            content: "Se alinean de manera uniforme, desde el inicio del contenedor y la última esta al final del contenedor.",
          },
          {
            title: "space-around",
            content: "Se distribuyen con espacios iguales entre ellas, con espacios de la mitad del tamaño en los extremos",
          },
          {
            title: "space-evenly",
            content: "Se distribuyen con espacios iguales entre ellas, incluidos los extremos",
          }
        ],
        example: "img/svg/justify-items.svg",
        exampleMobile: "img/svg/justify-items-mobile.svg",
        demo: "https://codepen.io/Ninaiskel/pen/aqGJKE",
        BrowserSupport: "https://caniuse.com/#search=css%20grid",
        links: [
          {
            name: "CSS-tricks / CSS grid ",
            link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
          },
          {
            name: "Mozilla",
            link: "https://developer.mozilla.org/es/docs/Web/CSS/align-content"
          }
        ]
      },
    {
      id: 13,
      name: "grid-template-columns",
      tag: "CSS Grid",
      description: "Define el tamaño de las columnas (eje horizontal). Los valores representan el tamaño de la ruta y el espacio entre ellos representa la línea de la cuadrícula. Se puede unificar con grid-templete-row en una: grid-column",
      sintaxis: "<lenght> |  fr  | max-content | min-content | minmax(min, max) | auto | repeat(número, <unidad>)",
      valueAmount: 1,
      values: [
        {
          title: "<lenght>",
          content: "Se pueden utilizar pixeles(px) o porcentajes (%) o ambas. Las unidades pueden combinarse, dependiendo de la necesidad de uso.",
        },
        {
          title: "fr",
          content: "Es una nueva unidad de medida que representa la fracción de espacio disponible dentro del grid. Se puede usar al definir grillas como cualquier otra longitud de CSS como %, px o em, Pero no habrá desbordamiento en el eje x porque al establecer cada columna en 1fr, se toma en cuenta esa cuenta el grid gap utilizado y automáticamente se resta del ancho total disponible para cada columna.",
        },
        {
          title: "max-content",
          content: "Representa la mayor contribución de contenido máximo de los elementos de la cuadrícula.",
        },
        {
          title: "min-content",
          content: "Representa la mayor contribución de contenido mínimo de los elementos de la cuadrícula.",
        },
        {
          title: "minmax(min, max)",
          content: "Es una notación funcional que define un rango de tamaño mayor o igual a min y menor o igual que max.ejemplo: minmax(auto, mix-content).",
        },
        {
          title: "auto",
          content: "El tamaño está determinado por el tamaño del contenedor y el tamaño del contenido de los elementos en la columna.",
        },
        {
          title: "repeat(número, <unidad>)",
          content: "Representa un fragmento repetido de las unidades, permitiendo que una gran cantidad de columnas que exhiban el mismo patrón se escriban en una forma más compacta.",
        }
      ],
      example: "img/svg/grid-template-columns.svg",
      exampleMobile: "img/svg/grid-template-columns-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/eVyOXp",
      BrowserSupport: "https://caniuse.com/#search=grid-template",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "CSS-tricks / Introducción a la unidad CSS 'fr'",
          link: "https://css-tricks.com/introduction-fr-css-unit/"
        },
        {
          name: "Mozilla / grid-template-columns",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
        },
        {
          name: "Ejemplo usando repeat(), Rachel Andrew",
          link: "https://gridbyexample.com/examples/example9/"
        }
      ]
    },
    {
      id: 14,
      name: "grid-template-rows",
      tag: "CSS Grid",
      description: "Define el tamaño de las filas (eje vertical). Los valores representan el tamaño de la ruta y el espacio entre ellos representa la línea de la cuadrícula. Se puede unificar con grid-templete-columns en una: grid-column",
      sintaxis: "<length>|  fr  | max-content | min-content | minmax(min, max) | auto | repeat(número, <unidad>) | fit-content( <length> | % )",
      valueAmount: 1,
      values: [
        {
          title: "<length>",
          content: "Se pueden utilizar pixeles(px) o porcentajes (%) o ambas. Las unidades pueden combinarse, dependiendo de la necesidad de uso.",
        },
        {
          title: "fr",
          content: "Es una nueva unidad de medida que representa la fracción de espacio disponible dentro del grid. Se puede usar al definir grillas como cualquier otra longitud de CSS como %, px o em, Pero no habrá desbordamiento en el eje x porque al establecer cada columna en 1fr, se toma en cuenta esa cuenta el grid gap utilizado y automáticamente se resta del ancho total disponible para cada columna.",
        },
        {
          title: "max-content",
          content: "Representa la mayor contribución de contenido máximo de los elementos de la cuadrícula.",
        },
        {
          title: "min-content",
          content: "Representa la mayor contribución de contenido mínimo de los elementos de la cuadrícula.",
        },
        {
          title: "minmax(min, max)",
          content: "Es una notación funcional que define un rango de tamaño mayor o igual a min y menor o igual que max.ejemplo: minmax(auto, mix-content).",
        },
        {
          title: "auto",
          content: "El tamaño está determinado por el tamaño del contenedor y el tamaño del contenido de los elementos en la columna.",
        },
        {
          title: "repeat(número, <unidad>)",
          content: "Representa un fragmento repetido de las unidades, permitiendo que una gran cantidad de columnas que exhiban el mismo patrón se escriban en una forma más compacta.",
        },
        {
          title: "fit-content( <length> | percentage )",
          content: "Representa la fórmula min (max-content, max (auto, argument)) que se calcula de manera similar al auto, excepto que el tamaño de la pista está bloqueado en el argumento si es mayor que el mínimo automático.",
        }
      ],
      example: "img/svg/grid-template-rows.svg",
      exampleMobile: "img/svg/grid-template-rows-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/eVyOXp",
      BrowserSupport: "https://caniuse.com/#search=grid-template",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "CSS-tricks / Introducción a la unidad CSS 'fr'",
          link: "https://css-tricks.com/introduction-fr-css-unit/"
        },
        {
          name: "Mozilla / grid-template-rows",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"
        },
        {
          name: "Grid example by Rachel Andrew",
          link: "https://gridbyexample.com/"
        }
      ]
    },
    {
      id: 15,
      name: "grid-column-start | end",
      tag: "CSS Grid",
      description: "Determina la ubicación de un elemento de cuadrícula dentro de la cuadrícula al referirse a líneas de cuadrícula específicas. grid-column-start / grid-row-start es la línea donde comienza el elemento, y grid-column-end / grid-row-end la linea donde termina.",
      sintaxis: "número o nombre | span<número> | span<nombre> | auto",
      valueAmount: 4,
      values: [
        {
          title: "número o nombre",
          content: "Puede ser un número para referirse a una línea de cuadrícula numerada, o un nombre para referirse a una línea de cuadrícula con nombre",
        },
        {
          title: "span<número>",
          content: "Se extenderá hasta que llegue a la siguiente línea con el número provisto.",
        },
        {
          title: "span<nombre>",
          content: "Se extenderá hasta que llegue a la siguiente línea con el nombre provisto",
        },
        {
          title: "auto",
          content: "Ubicación automática",
        }
      ],
      example: "img/svg/grid-column-s-e.svg",
      exampleMobile: "img/svg/grid-column-s-e-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/eVyOXp",
      BrowserSupport: "https://caniuse.com/#search=grid-column",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Mozilla / grid-column-start",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start"
        },
        {
          name: "Ejemplo por Rachel Andrew",
          link: "https://gridbyexample.com/examples/example7/"
        }
      ]
    },
    {
      id: 16,
      name: "grid-row-start | end",
      tag: "CSS Grid",
      description: "Determina la ubicación de un elemento de cuadrícula dentro de la cuadrícula al referirse a líneas de cuadrícula específicas. grid-row-start / grid-column-start es la línea donde comienza el elemento, y grid-row-end / grid-column-end la linea donde termina.",
      sintaxis: "número o nombre | span<número> | span<nombre> | auto",
      valueAmount: 4,
      values: [
        {
          title: "número o nombre",
          content: "Puede ser un número para referirse a una línea de cuadrícula numerada, o un nombre para referirse a una línea de cuadrícula con nombre",
        },
        {
          title: "span<número>",
          content: "Se extenderá hasta que llegue a la siguiente línea con el número provisto.",
        },
        {
          title: "span<nombre>",
          content: "Se extenderá hasta que llegue a la siguiente línea con el nombre provisto",
        },
        {
          title: "auto",
          content: "Ubicación automática",
        }
      ],
      example: "img/svg/grid-row-s-e.svg",
      exampleMobile: "img/svg/grid-row-s-e-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/eVyOXp",
      BrowserSupport: "https://caniuse.com/#search=grid-row",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Mozilla / grid-column-start",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start"
        },
        {
          name: "Ejemplo por Rachel Andrew",
          link: "https://gridbyexample.com/examples/example7/"
        }
      ]
    },
    {
      id: 17,
      name: "grid-gap",
      tag: "CSS Grid",
      description: "Es una propiedad  abreviada shorthand para grid-row-gap y grid-column-gap que define los canales entre las filas y las columnas de la cuadrícula. Al proporcionar un valor se establece el margen tanto para las filas como para las columnas",
      sintaxis: "<grid-row-gap> <grid-column-gap>",
      valueAmount: 1,
      values: [
        {
          title: "<longitud> o <porcentaje>",
          content: "Proporcionar solo un valor (grid-gap) aplica el mismo canal a la fila y a la columna. Los valores negativos no son válidos.",
        },
      ],
      example: "img/svg/grid-gap.svg",
      exampleMobile: "img/svg/grid-gap-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/EQoXqE",
      BrowserSupport: "https://caniuse.com/#search=css%20grid",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Mozilla / grid-gap",
          link: "https://developer.mozilla.org/es/docs/Web/CSS/grid-gap"
        },
      ]
    },
    {
      id: 18,
      name: "grid-template-area",
      tag: "CSS Grid",
      description: "Especifica nombres para cada una de las grid areas, y las usamos para posicionar nuestros elementos, en lugar de números de línea. Repetir el nombre de un grid-area hace que el contenido abarque esas celdas.",
      sintaxis: "none, <string>",
      valueAmount: 1,
      values: [
        {
          title: "none",
          content: "No se definen áreas de cuadrícula",
        },
        {
          title: "<grid-area-name>",
          content: "Especifica las áreas de cuadrícula nombradas como una serie de valores de cadena, las filas se crean listando líneas de cadenas separadas, mientras que las columnas se reflejan en cada una de las celdas que aparecen en la cadena",
        },
      ],
      example: "img/svg/grid-template-areas.svg",
      exampleMobile: "img/svg/grid-template-areas-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/KQQxwz",
      BrowserSupport: "https://caniuse.com/#search=css%20grid",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Mozilla / grid-template-area",
          link: "https://developer.mozilla.org/es/docs/Web/CSS/grid-template-areas"
        },
      ]
    },
    {
      id: 19,
      name: "grid-area",
      tag: "CSS Grid",
      description: "Da un nombre a un elemento para que pueda ser referenciado por una plantilla creada con la propiedad grid-template-areas.",
      sintaxis: "<string>",
      valueAmount: 1,
      values: [
        {
          title: "name",
          content: "El nombre que elegiste en grid-template-areas",
        }
      ],
      example: "img/svg/grid-area.svg",
      exampleMobile: "img/svg/grid-area-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/KQQxwz",
      BrowserSupport: "https://caniuse.com/#search=css%20grid",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Mozilla / grid-area",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area"
        },
        {
          name: "Definiendo las areas",
          link: "https://gridbyexample.com/examples/example11/"
        }
      ]
    },
    {
      id: 20,
      name: "justify-content",
      tag: "CSS Grid",
      description: "Guarda el mismo principio que para flexbox. Alinea los elementos en el eje principal (el horizontal) de su contenedor.",
      sintaxis: "start | end | center | stretch | space-between | space-around | space-evenly",
      valueAmount: 7,
      values: [
        {
          title: "start",
          content: "Se alinean al inicio del contenedor",
        },
        {
          title: "end",
          content: "Se alinean al final del contenedor",
        },
        {
          title: "center",
          content: "Se alinean al centro del contenedor",
        },
        {
          title: "stretch",
          content: "Cambia el tamaño de los elementos de grid para permitir que ocupe todo el ancho del contenedor del grid",
        },
        {
          title: "space-between",
          content: "Se alinean de manera uniforme, desde el inicio del contenedor y la última esta al final del contenedor.",
        },
        {
          title: "space-around",
          content: "Se distribuyen con espacios iguales entre ellas, con espacios de la mitad del tamaño en los extremos",
        },
        {
          title: "space-evenly",
          content: "Se distribuyen con espacios iguales entre ellas, incluidos los extremos",
        }
      ],
      example: "img/svg/justify-content-grid.svg",
      exampleMobile: "img/svg/justify-content-grid-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/aqGJKE",
      BrowserSupport: "https://caniuse.com/#search=css%20grid",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        }
      ]
    },
    {
      id: 21,
      name: "justify-items",
      tag: "CSS Grid",
      description: "Alinea el contenido dentro de un elemento de la cuadrícula a lo largo del eje de la fila.",
      sintaxis: "start | end | center | stretch",
      valueAmount: 4,
      values: [
        {
          title: "start",
          content: "Se alinean al inicio del grid-area",
        },
        {
          title: "end",
          content: "Se alinean al final del grid-area",
        },
        {
          title: "center",
          content: "Se alinean al centro del grid-area",
        },
        {
          title: "stretch",
          content: "Llena todo el ancho del grid-area",
        }
      ],
      example: "img/svg/justify-items.svg",
      exampleMobile: "img/svg/justify-items-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/PQeKPx",
      BrowserSupport: "https://caniuse.com/#search=css%20grid",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Ejemplos de justify-items por Rachel Andrew ",
          link: "https://gridbyexample.com/examples/example25/"
        },
        {
          name: "Mozilla ",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"
        }
      ]
    },
    {
      id: 22,
      name: "grid-auto",
      tag: "CSS Grid",
      description: "grid-auto-column / grid-auto-rows, Define si un elemento de la cuadrícula se coloca en una columna que no está dimensionada explícitamente por grid-template-column o grid-template-row, se crean grid-tracks implícitas para contenerla.",
      sintaxis: "<track-size>",
      valueAmount: 1,
      values: [
        {
          title: "<track-size>",
          content: "Puede ser una longitud(px), un porcentaje(%) o una fracción (fr)",
        }
      ],
      example: "img/svg/grid-auto.svg",
      exampleMobile: "img/svg/grid-auto-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/eVrLVB",
      BrowserSupport: "https://caniuse.com/#search=css%20grid",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Mozilla",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns"
        },
        {
          name: "La diferencia entre grillas explícitas e implícitas",
          link: "https://css-tricks.com/difference-explicit-implicit-grids/"
        },
        {
          name: "Ejemplo por Rachel Andrew",
          link: "https://gridbyexample.com/examples/example17/"
        }
      ]
    },
    {
      id: 23,
      name: "grid-auto-flow",
      tag: "CSS Grid",
      description: "Controla cómo funciona el algoritmo de auto colocación. Si tiene elementos de grid que no se colocan explícitamente en el grid, el algoritmo de colocación automática se activa para colocar automáticamente los elementos.",
      sintaxis: "row | column | row dense | column dense",
      valueAmount: 1,
      values: [
        {
          title: "row",
          content: "Le dice al algoritmo de colocación automática que complete cada fila (row), agregando nuevas filas según sea necesario",
        },
        {
          title: "column",
          content: "Le dice al algoritmo de colocación automática que complete cada columna, agregando nuevas columnas según sea necesario",
        },
        {
          title: "dense",
          content: "Le dice al algoritmo de colocación automática que intente rellenar los huecos antes en el grid, si aparecen elementos más pequeños más tarde",
        }
      ],
      example: "img/svg/grid-auto-flow.svg",
      exampleMobile: "img/svg/grid-auto-flow-mobile.svg",
      demo: "https://codepen.io/Ninaiskel/pen/eVrLVB",
      BrowserSupport: "https://caniuse.com/#search=css%20grid",
      links: [
        {
          name: "CSS-tricks / CSS grid ",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
        },
        {
          name: "Mozilla",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"
        },
        {
          name: "Ejemplo por Rachel Andrew",
          link: "https://gridbyexample.com/examples/example18/"
        }
      ]
    }
  ]
}

export default properties
