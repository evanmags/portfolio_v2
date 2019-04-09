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

export class Banner extends Component{
  render(){
    return(<header className="banner">
            <h1 className="banner__head">Evan Magnussen</h1>
            <h2 className="banner__subhead">Web Developer - Runner - Cook - Guitarist </h2>
          </header>)
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
