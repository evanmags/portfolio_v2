import React, { Component } from 'react';

class PortfolioCard extends Component{
  render(){
    return <div></div>
  }
}

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  blog_cards(){
    // make call to cms
    // get titles
    // get description
    // 
  }
  render(){
    return (<div className="portfolio">
              {this.state.reading 
                ? <PortfolioCard /> 
                : this.blog_cards()}
            </div>)
  }
}