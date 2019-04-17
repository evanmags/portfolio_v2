import React, { Component } from 'react';

// const portfolio_projects = [
//   {name: "Curly.js", langs: "JavaScript", image:"", 
//    description:"Curly was the brain child of working my way through learning React. This project started as a simple \"put things on the page\" idea and an exploratin in design and structure of software and how modern web frameworks function. While this project is not up to par with the likes of React, Vue, or Angular, it is something I am very proud of."},
//   {name: "ParkView", langs: "HTML, CSS, JavaScript, Node.js, MongoDB", image:"", 
//    description:""},
//   {name: "TrueGrid.css", langs: "Sass, SCSS, CSS", image:"", 
//    description:""},
//   {name: "Pixelator", langs: "JavaScript", image:"", 
//    description:""},
//   {name: "Pixelator", langs: "JavaScript", image:"", 
//    description:""},
// ]

class PortfolioCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      ...props,
      title: "Hello World",
      langs: "HTML, CSS, JS"
    }
  }
  render(){
    return (<div className="portfolio__card">
      <img className="card__image" src="" alt="project"/>
      <div className="card__body">
        <div className="card__head">
          <h2 className="card__title">{this.state.title}</h2>
          <span className="card__languages">{this.state.langs}</span>
        </div>
        <div className="card__description">

        </div>
        <div className='card__footer'>
          <button className="card__button">See More!</button>
        </div>
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