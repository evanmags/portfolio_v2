import React, { Component } from "react";
import Card from "./card";

function Statement(){
  return (
    <div className="privacy">
      <h3 className="privacy__head">analytics</h3>
      <p>
        This site uses <a href="https://analytics.google.com/analytics/web/" className="privacy__link">Google Analytics</a> to collect data on users. This tool places a cookie in your browser and allows me to better understand how users use my site. If you are uncomfortable with Google Analytics, you can install a <a href="https://tools.google.com/dlpage/gaoptout" className="privacy__link">browser extention</a> to opt out.
      </p>
      <h3 className="privacy__head">concerns</h3>
      <p>
        If you have any questions or concerns about the collection and use of user data, you can reach me at <a href="mailto:magnussen.evan@gmail.com" className="privacy__link">magnussen.evan@gmail.com</a>.
      </p>
    </div>
  )
}

export default class Privacy extends Component{
  render(){
    return(
      <div>
        <Card
          title="Privacy"
          info="About the data I collect"
          description={<Statement/>}
        />
      </div>
    )
  }
}