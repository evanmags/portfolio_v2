import React, { Component } from "react";
import { Link } from "react-router-dom";
import isMobile from "../mobiledetect";

function MenuBtn(props) {
  if (props.internal) {
    return (
      <Link id={props.text} className="menubar__btn" to={props.href || "#"}>
        <span className="menubar__btn__text">{props.text}</span>
      </Link>
    );
  } else {
    return (
      <a id={props.text} className="menubar__btn" href={props.href || "#"}>
        <span className="menubar__btn__text">{props.text}</span>
      </a>
    );
  }
}

function Menubar(props) {
  return (
    <div className="menubar">
      <MenuBtn text="portfolio" href="/portfolio" internal={true} />
      <MenuBtn text="resume" href="/resume" internal={true} />
      <MenuBtn text="github" href="https://github.com/evanmags" />
      <MenuBtn text="codepen" href="https://codepen.io/emags112/" />
      {/* <MenuBtn text="ramblings" href="/blog" internal={true} /> */}
    </div>
  );
}

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "banner"
    };
    this.mouseenter = this.mouseenter.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
  }
  mouseenter() {
    if (window.location.hash === `#/` && !isMobile.any()) {
      this.setState({ class: "banner banner-pop" });
    }
  }
  mouseleave() {
    this.setState({ class: "banner" });
  }
  render() {
    return (
      <header
        className={this.state.class}
        onMouseEnter={this.mouseenter}
        onMouseLeave={this.mouseleave}
      >
        <h1 className="banner__head">Evan Magnussen</h1>
        <h2 className="banner__subhead">
          Web Developer - Runner - Cook - Guitarist
        </h2>
        <Menubar />
      </header>
    );
  }
}
