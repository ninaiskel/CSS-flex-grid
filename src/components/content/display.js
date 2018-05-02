import React from 'react';
import './css/display.css';

const Display = ({ openSidebar }) => (
  <div className="display">
    <section>
      <h1>Flexbox</h1>
      <article class="display-content">
        <div class="display-description">
          <p> Flexbox Layaout, es un sistema de elementos flexibles que que multiplica las posibilidades de maquetación web y nos facilita la composición del diseño, ayudando a mejorar la alineación, dirección y orden de los elementos.</p>
          <p>Es definido por <code className="code">Display: Flex</code> Las propiedades que nos presenta Flexbox las podemos dividir en dos grupos, para el elemento contenedor flex (flex-container) y  para los elementos hijos flexibles.(flex-items).</p>
          <code className="code">.flex-container =></code><code className="code">display: flex; </code>
          <div className="info-property">
            <p>Para mayor comprensión puedes revisar cada una de las propiedades presentadas aquí</p>
            <button className="button" onClick={ openSidebar }>Propiedades</button>
          </div>
        </div>
        <div>
          <h3>Enlaces de interés</h3>
          <p>Hay recursos muy útiles en internet que pueden servirte de ayuda, éstos son algunos de ellos.</p>
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
          <p>Llegó para cambiar por completo la forma en que diseñamos interfaces de usuario basadas en un grid. Es un sistema bidimensional, lo que significa que puede manejar tanto columnas como filas, a diferencia de flexbox, que es en gran medida un sistema unidimensional.</p>
          <p>Con CSS grid podemos jugar con nuestra imaginación y lograr diseños diferentes, ya que podemos posicionar cada elemento en base a estas filas y columnas que hemos creado, jugando con su tamaño, posición y orden.</p>
          <p>Es definido por <code className="code">Display: grid</code> en el contenedor padre, además se establen los tamaños de <code className="code">grid-template-columns</code> y <code className="code">grid-template-rows</code> y a continuación se definen sus elementos hijos con <code className="code">grid-column</code> y <code className="code">grid-row</code></p>
          <div className="info-property">
            <p>Para mayor comprensión puedes revisar cada una de las propiedades presentadas aquí</p>
            <button className="button" onClick={ openSidebar }>Propiedades</button>
          </div>
        </div>
        <div>
          <h3>Enlaces de interés</h3>
          <p>Hay recursos muy útiles en internet que pueden servirte de ayuda, éstos son algunos de ellos.</p>
          <ul className="resources">
            <li className="resource-item">
              <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">
                <h4>CSS-Tricks</h4>
                <p>Tiene una guía completa de CSS-Grid layout</p>
              </a>
            </li>
            <li className="resource-item">
              <a href="https://cssgrid.io/" target="_blank" rel="noopener noreferrer">
                <h4>CSS Grid - Wes Bos</h4>
                <p>Realizó un maravilloso curso con 25 videos gratis.</p>
              </a>
            </li>
            <li className="resource-item resource-item-3">
              <a href="https://gridbyexample.com/examples/" target="_blank" rel="noopener noreferrer">
                <h4>Grid by Example</h4>
                <p>Rachel Andrew, muestra ejemplos y descripciones para entender como funciona CSS Grid</p>
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
        <div>
          <h3>En conclusión</h3>
          <p>Flexbox y CSS Grid pueden funcionar juntos, un elemento grid puede ser un contenedor de flexbox o un elemento flex puede ser un contenedor grid.
          Cada tecnología tiene sus propias fortalezas, y dado que ambas son buenas en cosas diferentes, se pueden combinar fácilmente según tus necesidades.</p>
        </div>
      </article>
    </section>
  </div>
);

export default Display;
