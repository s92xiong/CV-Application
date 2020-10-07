import React from 'react';
import Education from './Education';
import WorkExperience from './WorkExperience';

const Contents = (props) => (
  <div className="content">
    <i className="fa fa-edit" onClick={props.handleClick}></i>
    <h1 className="title">{props.name}</h1>
    <div className="large-separator-bar"></div>
    <div className="sub-content">
      <Education
        school={props.school}
        degree={props.degree}
        major={props.major}
        graduationYear={props.graduationYear}
      />
      <WorkExperience
        employer={props.employer}
        jobTitle={props.jobTitle}
        startDate={props.startDate}
        endDate={props.endDate}
      />
    </div>
  </div>
);

export default Contents;