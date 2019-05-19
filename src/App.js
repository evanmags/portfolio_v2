import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "./components/banner";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Privacy from "./components/privacy";
import Footer from "./components/footer";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Banner />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
