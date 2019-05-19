import React, { Component } from "react";
import { Link } from "react-router-dom"

function Contact() {
  return require('../data.json').resume.contact.map(element => {
    if(element.type === "phone") return false;
    return (
        <a className="footer__link" href={element.href}>
          <i className={element.icon} />
        </a>
    );
  });

}

function PrivacyLink(){
  return (<Link className="footer__link" to="/privacy">Privacy</Link>)
}

export default class Footer extends Component {
  render(){
    return (
      <footer className="footer">
        <div>
          <span>© 2019 Evan Magnussen</span> | <PrivacyLink /> | <Contact />
        </div>
      </footer>
    )
  }
}
