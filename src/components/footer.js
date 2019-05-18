import React, { Component } from "react";

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

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <div>
          <span>© 2019 Evan Magnussen | </span><Contact />
        </div>
      </footer>
    )
  }
}
