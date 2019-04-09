import React, { Component } from 'react';

class BlogPost extends Component{
  render(){
    return <div></div>
  }
}

class BlogCard extends Component{
  render(){
    return (<div className="blog__card">
              <h2 className="blog__title">I ran Today</h2>
              <p className="blog__description">It was very windy but it was still a good day in my book. I did about 7 miles and it was faster than previous, similar runs. I felt ok about it but still want more.</p>
              <span className="blog__length">250 words. 4 minutes</span>
            </div>)
  }
}

export default class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  blog_cards(){
    return <BlogCard />;
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