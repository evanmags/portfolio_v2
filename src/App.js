import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Banner } from "./components/banner";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Banner />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
