import React from 'react';

const Sidebar = (props) => (
  <div className="sidebar">
    <img src={props.imageSrc} alt="Profile" className="profile-image"/>
    <div className="contact">
      <h2>CONTACT</h2>
      <div className="separator-bar"></div>
      <div className="sub-header address">
        <strong>ADDRESS</strong>
        <p>{props.address}</p>
      </div>
      <div className="sub-header phone">
        <strong>PHONE</strong>
        <p>{props.phoneNumber}</p>
      </div>
      <div className="sub-header email">
        <strong>EMAIL</strong>
        <p>{props.email}</p>
      </div>
    </div>
  </div>
);

export default Sidebar;