import React, { Component } from 'react';

class PortfolioCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: "Hello World",
      langs: "HTML, CSS, JS"
    }
  }
  render(){
    return (<div className="portfolio__card">
      <div className="card__head">
        <h4 className="head__title">{this.state.title}</h4>
        <span className="head__languages">{this.state.langs}</span>
      </div>
      <div className="card__body">

      </div>
      <div className='card__footer'>
        <button className="card__button">See More!</button>
      </div>
    </div>)
  }
}

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      reading: true
    }
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