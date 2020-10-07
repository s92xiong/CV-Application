import React from 'react';

const SubmitForm = (props) => (
  <div className="submit-form-outer-div">
    <img src={props.imageSrc} alt="Profile" className="profile-image-small"/>
    <form className="form-field" onSubmit={props.handleSubmit}>
      <div className="inner-form-field form-field-0">
        <h3>Applicant Information</h3>
        <div className="input-div">
          <label>Name</label>
          <input type="text" value={props.name} onChange={props.handleChange} name="name"/>
        </div>
        <div className="input-div">
          <label>Email</label>
          <input type="email" value={props.email} onChange={props.handleChange} name="email"/>
        </div>
        <div className="input-div">
          <label>Address</label>
          <input type="text" value={props.address} onChange={props.handleChange} name="address"/>
        </div>
        <div className="input-div">
          <label>Phone Number</label>
          <input type="tel" value={props.phoneNumber} onChange={props.handleChange} name="phoneNumber"/>
        </div>
      </div>
      <div className="inner-form-field form-field-1">
        <h3>Education</h3>
        <div className="input-div">
          <label>School</label>
          <input type="text" value={props.school} onChange={props.handleChange} name="school"/>
        </div>
        <div className="input-div">
          <label>Degree</label>
          <input type="text" value={props.degree} onChange={props.handleChange} name="degree"/>
        </div>
        <div className="input-div">
          <label>Major</label>
          <input type="text" value={props.major} onChange={props.handleChange} name="major"/>
        </div>
        <div className="input-div">
          <label>Graduation Year</label>
          <input type="month" value={props.graduationYear} onChange={props.handleChange} name="graduationYear"/>
        </div>
      </div>
      <div className="inner-form-field form-field-2">
        <h3>Work Experience</h3>
        <div className="input-div">
          <label>Employer</label>
          <input type="text" value={props.employer} onChange={props.handleChange} name="employer"/>
        </div>
        <div className="input-div">
          <label>Job Title</label>
          <input type="text" value={props.jobTitle} onChange={props.handleChange} name="jobTitle"/>
        </div>
        <div className="input-div">
          <label>Start Date</label>
          <input type="month" value={props.startDate} onChange={props.handleChange} name="startDate"/>
        </div>
        <div className="input-div">
          <label>End Date</label>
          <input type="month" value={props.endDate} onChange={props.handleChange} name="endDate"/>
        </div>
        <input type="submit" className="submit-form-button" value="SUBMIT" />
      </div>
    </form>
  </div>
);

export default SubmitForm;