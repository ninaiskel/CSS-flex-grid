import React from 'react';
import './css/display.css';

const Display = () => (
  <div className="display">
    <section>
      <h1>Flexbox</h1>
      <article class="display-content">
        <div class="display-description">
          <p> Flexbox Layaout, es el nuevo modelo de layout implementado en la especificación CSS3 para mejorar la alineación, dirección y orden de los elemento en el documento web, su diseño es independiente de la dirección en comparación con los diseños normales</p>
          <p>Es definido por <span>Display: Flex</span> y debe estar constituido por elementos padres e hijos, el padre será el contenedor Flexible “flex container” y los hijos inmediato serán los elementos Flexibles “flex item”.</p>
          <p>Las propiedades que nos presenta Flexbox las podemos dividir en dos grupos, para el elemento contenedor flex (flex-container) y  para los elementos hijos flexibles.(flex-items)</p>
        </div>
        <div>
          <h3>Enlaces de interes</h3>
          <p>Para mayor comprensión puedes revisar cada una de las propiedas presentadas aquí o puedes revisar alguno de estos enlaces.</p>
          <ul className="resources">
            <li className="resource-item">
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">
                <h4>CSS-Tricks</h4>
                <p>Chris Coyier explica muy bien como trabaja Flexbox y ha sido mi recurso de partida para entenderlo.</p>
              </a>
            </li>
            <li className="resource-item">
              <a className="" href="https://flexbox.io/" target="_blank" rel="noopener noreferrer">
                <h4>What the Flexbox?</h4>
                <p>Wes Bos tiene un increíble curso con 13 videos gratis</p>
              </a>
            </li>
            <li className="resource-item resource-item-last">
              <a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox" target="_blank" rel="noopener noreferrer">
                <h4>Conceptos básicos de Flexbox</h4>
                <p>Mozilla ofrece descripciones de como trabaja Flexbox</p>
              </a>
            </li>
          </ul>
        </div>
      </article>
      <h1>CSS Grid</h1>
      <article class="display-content">
        <div class="display-description">
          <p>Cambiar por completo la forma en que diseñamos las interfaces de usuario basadas en un grid. Es un sistema bidimensional, lo que significa que puede manejar tanto columnas como filas, a diferencia de flexbox, que es en gran medida un sistema unidimensional. Con CSS grid se puden lograr lograr muchos diseños diferentes.</p>
          <p>Es definido por <span>Display: grid</span>en el contenedor padre, también se establen los tamaños de grid-template-columns y grid-template-rows y a continuacióny se colocan sus elementos secundarios en el grid con grid-column y grid-row.</p>
          <p>Al igual que en flexbox, el orden de origen de los elementos del grid no importa y Las propiedades que nos presenta las podemos dividir en dos grupos, para el elemento contenedor (grid-container) y  para los elementos hijos (grid-items)</p>
        </div>
        <div>
          <h3>Enlaces de interes</h3>
          <p>Para mayor comprensión puedes revisar cada una de las propiedas presentadas aquí o puedes revisar alguno de estos enlaces.</p>
          <ul className="resources">
            <li className="resource-item">
              <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">
                <h4>CSS-Tricks</h4>
                <p>Tiene una guia completa de CSS-Grid layout</p>
              </a>
            </li>
            <li className="resource-item">
              <a href="https://cssgrid.io/" target="_blank" rel="noopener noreferrer">
                <h4>CSS Grid - Wes Bos</h4>
                <p>Wes, también realizó un maravilloso curso con 25 videos gratis</p>
              </a>
            </li>
            <li className="resource-item resource-item-3">
              <a href="https://gridbyexample.com/examples/" target="_blank" rel="noopener noreferrer">
                <h4>Grid by Example</h4>
                <p>Rachel Andrew, te muestra ejemplos y descripciones para entender como funciona CSS Grid</p>
              </a>
            </li>
            <li className="resource-item resource-item-4">
              <a href="https://gridbyexample.com/examples/" target="_blank" rel="noopener noreferrer">
                <h4>Grid layout</h4>
                <p>En Mozilla, puedes encontrar información y ejemplos. </p>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
);

export default Display;
