import React, { Component } from "react";

function CardHead(props) {
  return (
    <div className="card__head">
      <h2 className="card__title">{props.title}</h2>
      <CardInfo info={props.info} />
    </div>
  );
}

function CardInfo(props) {
  return props.info
    ?(
      <span className={"card__info " + (props.right && "card__info-right")}>
        {props.info}
      </span>
    )
    : '';
}

function CardLink(props) {
  return (
    <a className="card__button" href={props.href} target="_blank" rel="noopener noreferrer">
      {props.text}
    </a>
  );
}

function CardFooter(props) {
  return props.links 
    ? (
      <div className="card__footer">
        {props.links.map(link => 
          <CardLink text={link.text.replace(/_/g, ' ')} href={link.href} key={link.text}/>
        )}
      </div>
    ) 
    : "";
}

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.image && (
          <img className="card__image" src={this.props.image} alt="project" />
        )}
        <div className="card__body">
          <CardHead
            title={this.props.title}
            info={this.props.date || this.props.tech}
          />
          <div className="card__description">{this.props.description}</div>
          <CardInfo info={this.props.length} right={true} />
          <CardFooter links={this.props.links} />
        </div>
      </div>
    );
  }
}

export default Card;
