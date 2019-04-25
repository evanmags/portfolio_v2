import React, { Component } from "react";

const portfolio_projects = [
  {
    name: "Curly.js",
    langs: "JavaScript",
    image: "",
    description: `Curly was the result of working my way through learning React. This project started as a simple "put things on the page" idea and an exploration of the DOM. As well Curly is an exploratin in the design and structure of software and how modern web frameworks function. While this project is not up to par with the likes of React, Vue, or Angular, it is something I am very proud of.
      Starting simply, Curly allows you to build websites/apps using nothing but structured JavaScript objects. These objects are completely self contained, incorporating styling, events, and anything else you could imagine. Because they are JavaScript objects you can use all of the functionality of JavaScript in your styling as well.
      Please have a look at the documentation for more information and explore the sandbox to get a taste for how building works.`
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
  {
    name: "Pixelator",
    langs: "React",
    image: "",
    description:
      "This was my first ever React project. A fun implementation of a pixel art editor that takes inspireation from the Etch-a-Sketch."
  }
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
    this.portfolio_cards = this.portfolio_cards.bind(this);
  }
  portfolio_cards() {
    return portfolio_projects.map(project => {
      return (
        <PortfolioCard
          key={project.name}
          name={project.name}
          langs={project.langs}
          image={project.image}
          description={project.description}
        />
      );
    });
  }
  render() {
    return (
      <div className="portfolio">
        {this.state.reading && this.portfolio_cards()}
      </div>
    );
  }
}
