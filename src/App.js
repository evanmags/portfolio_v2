import React, { Component } from 'react';
import {Banner, Menubar} from './components/banner'
import Blog from './components/blog'
import Portfolio from './components/portfolio'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      blog: false,
      portfolio: false
    }
  }
  handle_menu_click(e){
    
  }
  render() {
    return (<div id="App">
      <Banner />
      {this.state.blog ? <Blog /> : this.state.portfolio ? <Portfolio /> : ''}
      <Menubar />
      </div>)
  }
}

export default App;
