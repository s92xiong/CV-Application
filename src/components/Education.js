import React from 'react';

const Education = (props) => (
  <div className="education">
    <h2>EDUCATION</h2>
    <div className="separator-bar"></div>
    <div className="sub-content-sub-header">
      <strong>SCHOOL</strong>
      <p>{props.school}</p>
    </div>
    <div className="sub-content-sub-header">
      <strong>DEGREE</strong>
      <p>{props.degree}</p>
    </div>
    <div className="sub-content-sub-header">
      <strong>MAJOR</strong>
      <p>{props.major}</p>
    </div>
    <div className="sub-content-sub-header">
      <strong>YEAR OF GRADUATION</strong>
      <p>{props.graduationYear}</p>
    </div>
  </div>
);

export default Education;