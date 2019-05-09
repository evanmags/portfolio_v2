import React, { Component } from 'react';
const cards = require('../data.json').blog.posts;

class BlogPost extends Component{
  render(){
    return <div></div>
  }
}

function BlogCard(props){
  return (<div className="blog__card">
            <h2 className="blog__title">{props.title}</h2>
            <span className="blog__date">{props.date}</span>
            <p className="blog__description">{props.desc}</p>
            <span className="blog__length">{props.length}</span>
          </div>)
}

export default class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  blog_cards(){
    return cards.map(card => <BlogCard title={card.title} date={card.date} desc={card.description} length={card.length}  key={card.title}/>)
    // make call to cms
    // get titles
    // get description
    // 
  }
  render(){
    return (<div className="blog">
              {this.state.reading 
                ? <BlogPost /> 
                : this.blog_cards()}
            </div>)
  }
}