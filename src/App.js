import React, { Component } from 'react';
import {Banner} from './components/banner'
import Blog from './components/blog'
import Portfolio from './components/portfolio'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      landing: true,  
      blog: false,
      portfolio: false
    };
    this.handle_menu_click = this.handle_menu_click.bind(this);
  }
  handle_menu_click(e){
    this.setState({
      landing: false,
      blog: false,
      portfolio: false,
      [e.target.id]: true,
    })
  }
  render() {
    return (<div id="App">
      <Banner onClick={this.handle_menu_click} landing={this.state.landing} />
      {this.state.blog ? <Blog /> : this.state.portfolio ? <Portfolio /> : ''}
      </div>)
  }
}

export default App;
