import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Contents from './components/Contents';
import profileImage from './images/profile.png';
import SubmitForm from './components/SubmitForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: "Jonny Kim",
      email: "JonnyKimUSA@gmail.com",
      address: "2101 E NASA Pkwy, Houston, TX 77058, United States",
      phoneNumber: "+13218672692",
      school: "Harvard Medical School",
      degree: "Doctor of Medicine",
      major: "Math",
      graduationYear: "2016-08",
      employer: "Massachusetts General Hospital",
      jobTitle: "Emergency Medicine Physician",
      startDate: "2016-09",
      endDate: "2019-12",
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleEdit() {
    this.setState({isEdit: !this.state.isEdit});
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({isEdit: !this.state.isEdit});
  }

  handleValueChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  } 

  render() {
    if (this.state.isEdit) {
      return (
        <div className="App">
          {/* <i className="fa fa-close" onClick={this.handleEdit}></i> */}
          <SubmitForm 
            imageSrc={profileImage}
            handleSubmit={this.submitForm}
            handleChange={this.handleValueChange}
            name={this.state.name}
            email={this.state.email}
            address={this.state.address}
            phoneNumber={this.state.phoneNumber}
            school={this.state.school}
            degree={this.state.degree}
            major={this.state.major}
            graduationYear={this.state.graduationYear}
            employer={this.state.employer}
            jobTitle={this.state.jobTitle}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Sidebar
          imageSrc={profileImage}
          email={this.state.email}
          address={this.state.address}
          phoneNumber={this.state.phoneNumber}
        />
        <Contents
          handleClick={this.handleEdit}
          name={this.state.name.toUpperCase()}
          school={this.state.school}
          degree={this.state.degree}
          major={this.state.major}
          graduationYear={this.state.graduationYear}
          employer={this.state.employer}
          jobTitle={this.state.jobTitle}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </div>
    );
  }
}

export default App;