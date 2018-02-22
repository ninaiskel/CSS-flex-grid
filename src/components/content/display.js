import React from 'react';
import './css/display.css';

const Display = () => (
  <div className="display">
    <section>
      <h1>Flexbox</h1>
      <article>
        <p> Flexbox Layaout, es el nuevo modelo de layout implementado en la especificación CSS3 para mejorar la alineación, dirección y orden de los elemento en el documento web, su diseño es independiente de la dirección en comparación con los diseños normales</p>
        <p>Es definido por <span>Display: Flex</span> y debe estar constituido por elementos padres e hijos, el padre será el contenedor Flexible “flex container” y los hijos inmediato serán los elementos Flexibles “flex item”.</p>
        <p>Las propiedades que nos presenta Flexbox las podemos dividir en dos grupos, para el elemento contenedor flex (flex-container) y  para los elementos hijos flexibles.(flex-items)</p>
      </article>
      <h3>Enlaces de interes</h3>
      <p>Para mayor comprensión puedes revisar cada una de las propiedas presentadas aquí o puedes revisar alguno de estos enlaces.</p>
      <ul className="link-info">
        <li className="link-info-item">
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background" target="_blank">
          CSS-Tricks
          </a>
          <p>Explica muy bien como trabaja Flexbox</p>
        </li>
        <li className="link-info-item">
          <a href="https://flexbox.io/" target="_blank">
          What the Flexbox?
          </a>
          <p>Wes Bos tiene un increíble curso de 13 videos y es gratis</p>
        </li>
        <li className="link-info-intersting">
          <a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox" target="_blank">Conceptos básicos de Flexbox
          </a>
          <p>Mozilla ofrece descripciones de como trabaja Flexbox</p>
        </li>

      </ul>
    </section>
    <section>
      <h1>CSS Grid</h1>
    </section>
  </div>
);

export default Display;
