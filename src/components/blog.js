import React, { Component } from "react";
import Card from "./card";
const cards = require("../data.json").blog.posts;


export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  blog_cards() {
    return cards.map(card => (
      <Card
        title={card.title}
        date={card.date}
        description={card.description}
        length={card.length}
        key={card.title}
      />
    ));
  }
  render() {
    return <div className="blog">{this.blog_cards()}</div>;
  }
}
