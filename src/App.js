import React, { Component } from 'react';
import {Banner} from './components/banner'
import Blog from './components/blog'
import Portfolio from './components/portfolio'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      blog: false,
      portfolio: false
    };
    this.handle_menu_click = this.handle_menu_click.bind(this);
  }
  handle_menu_click(e){
    this.setState({
      blog: false,
      portfolio: false,
      [e.target.id]: true,
    })
  }
  render() {
    return (<div id="App">
      <Banner />
      {this.state.blog ? <Blog /> : this.state.portfolio ? <Portfolio /> : ''}
      </div>)
  }
}

export default App;
