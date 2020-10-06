import React from 'react';
import './App.css';
import profileImage from './images/profile.png';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <img src={profileImage} alt="Profile" className="profile-image"/>
        <div className="sidebar-content contact">
          <div className="sidebar-header">
            <h2>CONTACT</h2>
            <i className="fa fa-edit"></i>
          </div>
          <div className="nicebar"></div>
          <div className="sub-header address">
            <strong>ADDRESS</strong>
            <p>2101 E NASA Pkwy, Houston, TX 77058, United States</p>
          </div>
          <div className="sub-header phone">
            <strong>PHONE</strong>
            <p>+1-321-867-2692</p>
          </div>
          <div className="sub-header email">
            <strong>EMAIL</strong>
            <p>JonnyKimUSA@gmail.com</p>
          </div>
        </div>
        <div className="sidebar-content education">
        <div className="sidebar-header">
            <h2>EDUCATION</h2>
            <i className="fa fa-edit"></i>
          </div>
          <div className="nicebar"></div>
          <div className="sub-header school">
            <strong>SCHOOL</strong>
            <p>University of San Diego</p>
          </div>
          <div className="sub-header title-of-study">
            <strong>FACULTY</strong>
            <p>Bachelor of Mathematics</p>
          </div>
        </div>
      </div>
      
      <div className="content">
        <h1 className="title">JONNY KIM</h1>
        <h2 className="sub-title">ASTRONAUT</h2>
        <div className="big-nicebar"></div>
        <h2 className="date">OCT 5, 2020</h2>
        <div className="nicebar"></div>
        <p className="paragraph">Dear Hiring Manager</p>
        <p className="paragraph">I'm excited to be applying for the Software Developer position at Cloud Clearwater. With software development, there is always something new to discover. Designing a program that is truly helpful to the user is my ultimate goal on every project, and I am delighted by the opportunity to apply my knowledge at Cloud Clearwater, a top provider of cloud services.</p>        <p className="paragraph">Thank you for your time and consideration. I'm looking forward to learning more about the Software Developer position and about Cloud Clearwater. As a Software Developer, my goal is to continually increase my programming skills in order to present better solutions to my employers and their clients. I enjoy uncovering new ideas and would use them to advance Cloud Clearwater's mission to deliver viable solutions for digital storage.</p>
        <p className="paragraph">Sincerely,</p>
        <p className="paragraph">Jonathan Joestar</p>
      </div>
    </div>
  );
}

export default App;