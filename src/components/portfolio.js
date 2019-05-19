import React, { Component } from "react";
import Card from "./card";

const portfolio_projects = require("../data.json").portfolio.projects;

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
        <Card
          key={project.name}
          title={project.name}
          info={project.tech}
          image={project.image}
          links={project.links}
          description={project.description.map(p => (
            <p key={p.slice(0, 5)}>{p}</p>
          ))}
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
