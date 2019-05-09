import React, { Component } from "react";

const portfolio_projects = require("../data.json").portfolio.projects;

class PortfolioCard extends Component {
  render() {
    return (
      <div className="portfolio__card">
        {this.props.image && (
          <img className="card__image" src={this.props.image} alt="project" />
        )}
        <div className="card__body">
          <div className="card__head">
            <h2 className="card__title">{this.props.name}</h2>
            <span className="card__languages">{this.props.langs}</span>
          </div>
          <div className="card__description">{this.props.description}</div>
          <div className="card__footer">
            {this.props.links.live_link && (
              <a href={this.props.links.live_link}>
                <button className="card__button">Live Site</button>
              </a>
            )}
            {this.props.links.github && (
              <a href={this.props.links.github}>
                <button className="card__button">GitHub</button>
              </a>
            )}
            {this.props.links.post && (
              <a href={this.props.links.post}>
                <button className="card__button">Read More!</button>
              </a>
            )}
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
          links={project.links || {}}
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
