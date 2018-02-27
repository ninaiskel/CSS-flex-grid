import React, { Component } from 'react';
import Icon from './../icons'
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="follow">
          <p>Sigueme:</p>
          <a className="icon footer-links-icon"
                  href="https://twitter.com/NinAiskel"
                  target="_blank" rel="noopener noreferrer">
            <Icon name="icon-twitter"/>
          </a>
          <a className="icon footer-links-icon"
                  href="https://twitter.com/NinAiskel"
                  target="_blank" rel="noopener noreferrer">
            <Icon name="icon-github" />
          </a>
        </div>
        <p>Diseñado y construido con <span className="heart"></span> por
          <a href="https://ninaiskel.github.io/Web-Jess/"
             target="_blank"
             rel="noopener noreferrer" >Jess</a>
        </p>
        <small>Copyright 2018</small>
      </section>
    );
  }
}

export default Footer;
