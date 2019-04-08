import React, { Component } from 'react';

class BlogPost extends Component{
  render(){
    return <div></div>
  }
}

export class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  blog_cards(){
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