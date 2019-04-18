import React, { Component } from "react";

const portfolio_projects = [
  {
    name: "Curly.js",
    langs: "JavaScript",
    image: "",
    description:
      'Curly was the brain child of working my way through learning React. This project started as a simple "put things on the page" idea and an exploratin in design and structure of software and how modern web frameworks function. While this project is not up to par with the likes of React, Vue, or Angular, it is something I am very proud of.'
    
  },
  {
    name: "ParkView",
    langs: "HTML, CSS, JavaScript, Node.js, MongoDB",
    image: "",
    description: ""
  },
  {
    name: "TrueGrid.css",
    langs: "Sass, SCSS, CSS",
    image: "",
    description: ""
  },
  { name: "Pixelator", langs: "React", image: "", description: "This was my first ever React project. A fun implementation of a pixel art editor that takes inspireation from the Etch-a-Sketch." },
];

class PortfolioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  render() {
    return (
      <div className="portfolio__card">
        <img className="card__image" src={this.state.image} alt="project" />
        <div className="card__body">
          <div className="card__head">
            <h2 className="card__title">{this.state.name}</h2>
            <span className="card__languages">{this.state.langs}</span>
          </div>
          <div className="card__description">{this.state.description}</div>
          <div className="card__footer">
            <button className="card__button">Live Site</button>
            <button className="card__button">GitHub</button>
            <button className="card__button">Read More!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reading: true
    };
    this.portfolio_cards = this.portfolio_cards.bind(this)
  }
  portfolio_cards() {
    return portfolio_projects.map(e => {
      return (
        <PortfolioCard
          name={e.name}
          langs={e.langs}
          image={e.image}
          description={e.description}
        />
      );
    });
  }
  render() {
    return (
      <div className="portfolio">
        {this.state.reading ? this.portfolio_cards() : ''}
      </div>
    );
  }
}
