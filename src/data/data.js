const properties = [
  {
    id: 1,
    name: "align-content",
    tag: "flexbox",
    description: "define como se alinea dentro de un contenedor flexible (Flexible Box Layout module), solo se aplica si flex-wrap: wrap está presente y si hay varias lineas de elemntos de flexbox.",
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
    demo: "demo",
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
    description: "Puedes pensarlo como la versión de justificación-contenido para el eje transversal",
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
    demo: "demo",
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
    demo: "demo",
    BrowserSupport: "https://caniuse.com/#search=align-self",
    links: [
      {
        name: "CSS-tricks / align items",
        link: "https://css-tricks.com/almanac/properties/a/align-self/"
      },
      {
        name: "Mozilla",
        link: "https://developer.mozilla.org/es/docs/Web/CSS/align-self"
      }
    ]
  }
]

export default properties
