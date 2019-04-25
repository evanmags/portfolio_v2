import React, { Component } from 'react';

class BlogPost extends Component{
  render(){
    return <div></div>
  }
}
const cards = [
  {title: "I ran Today",
  description: "It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",
  length: "250 words. 4 minutes",
  date: "12/3/18"}
]

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