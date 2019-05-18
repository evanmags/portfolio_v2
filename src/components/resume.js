import React, { Component } from "react";
import Card from "./card";
const resume = require("../data.json").resume;

function Divider(props){
  return <div className={`divider divider-${props.direction}`} />
}

function ResumeItem(props) {
  return (
    <div className="resume__item">
      <h3 className="resume__item__title">{props.title}</h3>
      <div className="resume__item__sub">
        <span>{props.institute}</span>
        <span>{props.year}</span>
      </div>
    </div>
  )
}

function Education() {
  const formalEDU = resume.education.formal.map(element => {
    return <ResumeItem title={element.degree} institute={element.school} year={element.year} />
  });
  const informalEDU = resume.education.informal.map(element => {
    return <ResumeItem title={element.class} institute={`${element.instructor} (${element.org})`} year={element.year} />
  });
  const body = (
    <div>
      <h3>Formal</h3>
      {formalEDU}
      <Divider direction="horizontal" />
      <h3>Informal</h3>
      {informalEDU}
    </div>
  )
  return (
    <Card title="Education" description={body} />
  );
}

function Skills() {
  const skills = resume.skills.map(skill => {
    return <ResumeItem title={skill.skill} institute={skill.subskills.join(', ')} />;
  })
  return (
    <Card title="Skills" description={skills} />
  );
}

function Work() {
  const employment = resume.work.map(job =>
    <ResumeItem title={job.title} institute={job.employer} year={`${job.dates.start} - ${job.dates.end}`} />
  );
  return (
    <Card title="Work History" description={employment} />
  );
}

function Contact() {
  const contactItems = resume.contact.map(element => {
    return (
      <p className="contactCard__method">
        <a href={element.href}>
          <i className={element.icon} /> {element.method}
        </a>
      </p>
    );
  });
  return <Card title="Contact" description={contactItems} />;
}

export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="row">
          <Education />
          <Divider direction="vertical" />
          <Skills />
        </div>
        <Divider direction="horizontal" />
        <div className="row">
        <Work />
        <Divider direction="vertical" />
        <Contact />
        </div>
      </div>
    );
  }
}
