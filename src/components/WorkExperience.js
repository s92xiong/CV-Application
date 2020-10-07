import React from 'react';

const WorkExperience = (props) => (
  <div className="work-experience">
    <h2>WORK EXPERIENCE</h2>
    <div className="separator-bar"></div>
    <div className="sub-content-sub-header">
      <strong>EMPLOYER</strong>
      <p>{props.employer}</p>
    </div>
    <div className="sub-content-sub-header">
      <strong>JOB TITLE</strong>
      <p>{props.jobTitle}</p>
    </div>
    <div className="sub-content-sub-header">
      <strong>START DATE</strong>
      <p>{props.startDate}</p>
    </div>
    <div className="sub-content-sub-header">
      <strong>END DATE</strong>
      <p>{props.endDate}</p>
    </div>
  </div>
);

export default WorkExperience;