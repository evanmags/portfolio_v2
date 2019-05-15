import React, { Component } from "react";

function CardLink(props) {
  return (
    <a href={props.href}>
      <button className="card__button">{props.text}</button>
    </a>
  );
}

class Card extends Component {
  render(props) {
    return (
      <div className="card">
        {this.props.image && (
          <img className="card__image" src={this.props.image} alt="project" />
        )}
        <div className="card__body">
          <div className="card__head">
            <h2 className="card__title">{this.props.title}</h2>
            <span className="card__info">
              {this.props.date || this.props.langs}
            </span>
          </div>
          <div className="card__description">{this.props.description}</div>
          {this.props.length && (
            <span className="card__info card__info-right">
              {this.props.length}
            </span>
          )}
          {this.props.links && (
            <div className="card__footer">
              {this.props.links.live_link && (
                <CardLink href={this.props.links.live_link} text="Live Site" />
              )}
              {this.props.links.github && (
                <CardLink href={this.props.links.github} text="GitHub" />
              )}
              {this.props.links.post && (
                <CardLink href={this.props.links.post} text="Read More!" />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
