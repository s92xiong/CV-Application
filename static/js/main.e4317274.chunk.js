(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),s=t.n(r),m=t(5),i=t(6),c=t(7),o=t(1),d=t(9),u=t(8),E=(t(15),function(e){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{src:e.imageSrc,alt:"Profile",className:"profile-image"}),l.a.createElement("div",{className:"contact"},l.a.createElement("h2",null,"CONTACT"),l.a.createElement("div",{className:"separator-bar"}),l.a.createElement("div",{className:"sub-header address"},l.a.createElement("strong",null,"ADDRESS"),l.a.createElement("p",null,e.address)),l.a.createElement("div",{className:"sub-header phone"},l.a.createElement("strong",null,"PHONE"),l.a.createElement("p",null,e.phoneNumber)),l.a.createElement("div",{className:"sub-header email"},l.a.createElement("strong",null,"EMAIL"),l.a.createElement("p",null,e.email))))}),h=function(e){return l.a.createElement("div",{className:"education"},l.a.createElement("h2",null,"EDUCATION"),l.a.createElement("div",{className:"separator-bar"}),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"SCHOOL"),l.a.createElement("p",null,e.school)),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"DEGREE"),l.a.createElement("p",null,e.degree)),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"MAJOR"),l.a.createElement("p",null,e.major)),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"YEAR OF GRADUATION"),l.a.createElement("p",null,e.graduationYear)))},p=function(e){return l.a.createElement("div",{className:"work-experience"},l.a.createElement("h2",null,"WORK EXPERIENCE"),l.a.createElement("div",{className:"separator-bar"}),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"EMPLOYER"),l.a.createElement("p",null,e.employer)),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"JOB TITLE"),l.a.createElement("p",null,e.jobTitle)),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"START DATE"),l.a.createElement("p",null,e.startDate)),l.a.createElement("div",{className:"sub-content-sub-header"},l.a.createElement("strong",null,"END DATE"),l.a.createElement("p",null,e.endDate)))},b=function(e){return l.a.createElement("div",{className:"content"},l.a.createElement("i",{className:"fa fa-edit",onClick:e.handleClick}),l.a.createElement("h1",{className:"title"},e.name),l.a.createElement("div",{className:"large-separator-bar"}),l.a.createElement("div",{className:"sub-content"},l.a.createElement(h,{school:e.school,degree:e.degree,major:e.major,graduationYear:e.graduationYear}),l.a.createElement(p,{employer:e.employer,jobTitle:e.jobTitle,startDate:e.startDate,endDate:e.endDate})))},v=t(2),g=t.n(v),N=function(e){return l.a.createElement("div",{className:"submit-form-outer-div"},l.a.createElement("img",{src:e.imageSrc,alt:"Profile",className:"profile-image-small"}),l.a.createElement("form",{className:"form-field",onSubmit:e.handleSubmit},l.a.createElement("div",{className:"inner-form-field form-field-0"},l.a.createElement("h3",null,"Applicant Information"),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",value:e.name,onChange:e.handleChange,name:"name"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",value:e.email,onChange:e.handleChange,name:"email"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Address"),l.a.createElement("input",{type:"text",value:e.address,onChange:e.handleChange,name:"address"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{type:"tel",value:e.phoneNumber,onChange:e.handleChange,name:"phoneNumber"}))),l.a.createElement("div",{className:"inner-form-field form-field-1"},l.a.createElement("h3",null,"Education"),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"School"),l.a.createElement("input",{type:"text",value:e.school,onChange:e.handleChange,name:"school"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Degree"),l.a.createElement("input",{type:"text",value:e.degree,onChange:e.handleChange,name:"degree"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Major"),l.a.createElement("input",{type:"text",value:e.major,onChange:e.handleChange,name:"major"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Graduation Year"),l.a.createElement("input",{type:"month",value:e.graduationYear,onChange:e.handleChange,name:"graduationYear"}))),l.a.createElement("div",{className:"inner-form-field form-field-2"},l.a.createElement("h3",null,"Work Experience"),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Employer"),l.a.createElement("input",{type:"text",value:e.employer,onChange:e.handleChange,name:"employer"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Job Title"),l.a.createElement("input",{type:"text",value:e.jobTitle,onChange:e.handleChange,name:"jobTitle"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"Start Date"),l.a.createElement("input",{type:"month",value:e.startDate,onChange:e.handleChange,name:"startDate"})),l.a.createElement("div",{className:"input-div"},l.a.createElement("label",null,"End Date"),l.a.createElement("input",{type:"month",value:e.endDate,onChange:e.handleChange,name:"endDate"})),l.a.createElement("input",{type:"submit",className:"submit-form-button",value:"SUBMIT"}))))},f=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={isEdit:!1,name:"Jonny Kim",email:"JonnyKimUSA@gmail.com",address:"2101 E NASA Pkwy, Houston, TX 77058, United States",phoneNumber:"+13218672692",school:"Harvard Medical School",degree:"Doctor of Medicine",major:"Math",graduationYear:"2016-08",employer:"Massachusetts General Hospital",jobTitle:"Emergency Medicine Physician",startDate:"2016-09",endDate:"2019-12"},n.handleEdit=n.handleEdit.bind(Object(o.a)(n)),n.submitForm=n.submitForm.bind(Object(o.a)(n)),n.handleValueChange=n.handleValueChange.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleEdit",value:function(){this.setState({isEdit:!this.state.isEdit})}},{key:"submitForm",value:function(e){e.preventDefault(),this.setState({isEdit:!this.state.isEdit})}},{key:"handleValueChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.isEdit?l.a.createElement("div",{className:"App"},l.a.createElement(N,{imageSrc:g.a,handleSubmit:this.submitForm,handleChange:this.handleValueChange,name:this.state.name,email:this.state.email,address:this.state.address,phoneNumber:this.state.phoneNumber,school:this.state.school,degree:this.state.degree,major:this.state.major,graduationYear:this.state.graduationYear,employer:this.state.employer,jobTitle:this.state.jobTitle,startDate:this.state.startDate,endDate:this.state.endDate})):l.a.createElement("div",{className:"App"},l.a.createElement(E,{imageSrc:g.a,email:this.state.email,address:this.state.address,phoneNumber:this.state.phoneNumber}),l.a.createElement(b,{handleClick:this.handleEdit,name:this.state.name.toUpperCase(),school:this.state.school,degree:this.state.degree,major:this.state.major,graduationYear:this.state.graduationYear,employer:this.state.employer,jobTitle:this.state.jobTitle,startDate:this.state.startDate,endDate:this.state.endDate}))}}]),t}(l.a.Component);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},2:function(e,a,t){e.exports=t.p+"static/media/profile.2a2b6c5a.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.e4317274.chunk.js.map