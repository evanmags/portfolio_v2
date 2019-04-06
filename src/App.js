import React, { Component } from 'react';
import {Banner, Menubar} from './components/banner'
import './App.css';

class App extends Component {
  render() {
    return (<div id="App">
      <Banner />
      <Menubar />
      </div>)
  }
}

export default App;
