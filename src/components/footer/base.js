import React, { Component } from 'react';
import Icon from './../icons'
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="follow">
          <p>Sigueme:</p>
          <button className="icon footer-links-icon">
            <Icon name="icon-twitter"/>
          </button>
          <button className="icon footer-links-icon">
            <Icon name="icon-github" />
          </button>
        </div>
        <p>Diseñado y construido con <span className="heart"></span> por
          <a href="https://ninaiskel.github.io/Web-Jess/"target="_blank" rel="noopener noreferrer" >Jess</a>
        </p>
        <small>Copyright 2018</small>
      </section>
    );
  }
}

export default Footer;
