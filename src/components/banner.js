import React, { Component } from 'react';


class MenuBtn extends Component{
  constructor(props){
    super(props)
    this.state = {
      ...props
    }
  }
  render(){
    return (<a className="menubar__btn"href={this.state.href || "#"}>{this.state.text}</a>)
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
render(){
  return(<div className="menubar">
            <MenuBtn text="Portfolio" />
            <MenuBtn text="Github" />
            <MenuBtn text="Codepen" />
            <MenuBtn text="Blog" />
        </div>)
}
}
