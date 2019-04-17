import React, { Component } from 'react';

class MenuBtn extends Component{
  constructor(props){
    super(props)
    this.state = {
      ...props
    }
  }
  render(){
    return (
      <a 
        id ={this.state.text} 
        className="menubar__btn" 
        href={this.state.href || "#"} 
        onClick={this.state.onClick}
      >
        {this.state.text}
      </a>)
  }
}

export class Menubar extends Component{
  constructor(props){
    super(props);
    this.state = {
      ...props
    }
  }
  render(){
    return(<div className="menubar">
              <MenuBtn onClick={this.state.onClick} text="portfolio" />
              <MenuBtn text="github" />
              <MenuBtn text="codepen" />
              <MenuBtn onClick={this.state.onClick} text="blog" />
          </div>)
  }
}

export class Banner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      class: "banner"
    };
    this.mouseenter = this.mouseenter.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
  }
  componentWillReceiveProps(props){
    this.setState({...props})
  }
  mouseenter() {
    if (this.state.landing) {
      this.setState({ class: "banner banner-pop" });
    }
  }
  mouseleave() {
    this.setState({ class: "banner" });
  }
  render(){
    return(<header className={this.state.class} onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
            <h1 className="banner__head">Evan Magnussen</h1>
            <h2 className="banner__subhead">Web Developer - Runner - Cook - Guitarist </h2>
            <Menubar onClick={this.state.onClick}/>
          </header>)
  }
}
