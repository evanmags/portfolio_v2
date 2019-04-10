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
  date: "12/3/18"},
  {title: "I ran Today",
  description: "It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",
  length: "250 words. 4 minutes",
  date: "12/3/18"},
  {title: "I ran Today",
  description: "It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",
  length: "250 words. 4 minutes",
  date: "12/3/18"},
  {title: "I ran Today",
  description: "It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",
  length: "250 words. 4 minutes",
  date: "12/3/18"},
  {title: "I ran Today",
  description: "It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",
  length: "250 words. 4 minutes",
  date: "12/3/18"},
  {title: "I ran Today",
  description: "It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",
  length: "250 words. 4 minutes",
  date: "12/3/18"},
  {title: "I ran Today",
  description: "It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.",
  length: "250 words. 4 minutes",
  date: "12/3/18"},
]
class BlogCard extends Component{
  constructor(props){
    super(props)
    this.state={
      ...props
    }
  }
  render(){
    return (<div className="blog__card">
              <h2 className="blog__title">{this.state.title}</h2>
              <span className="blog__date">{this.state.date}</span>
              <p className="blog__description">{this.state.desc}</p>
              <span className="blog__length">{this.state.length}</span>
            </div>)
  }
}

export default class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  blog_cards(){
    return cards.map(card => <BlogCard title={card.title} date={card.date} desc={card.description} length={card.length}/>)
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