import { useState } from "react";
import CV from "./CV";
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';

function App() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[contactSubmited, setContact] = useState(false);
  const[school, setSchool] = useState('');
  const[study, setStudy] = useState('');
  const[studyStartDate, setStudyStartDate] = useState('');
  const[studyEndDate, setStudyEndDate] = useState('');
  const[eduSubmited, setEdu] = useState(false);
  const[company, setCompany] = useState('');
  const[workTitle, setWorkTitle] = useState('');
  const[responsibilities, setResponsibilities] = useState('');
  const[startExpDate, setStartExpDate] = useState('');
  const[endExpDate, setEndExpDate] = useState('');
  const[expSubmited, setExp] = useState(false);

// contact
  const setNameChange = (value) => {
    setName(value);
  }
  const setEmailChange = (value) => {
    setEmail(value);
  }
  const setPhoneChange = (value) => {
    setPhone(value);
  }
  const submitSetter= () =>  setContact(true);

// education
  const setSchoolChange = (value) => {
    setSchool(value);
  }
  const setStudyChange = (value) => {
    setStudy(value);
  }
  const setStudyStartDateChange = (value) => {
    setStudyStartDate(value);
  }
  const setStudyEndDateChange = (value) => {
    setStudyEndDate(value);
  }
  const submitEduSetter= () =>  setEdu(true);

// experience
  const setCompanylChange = (value) => {
    setCompany(value);
  }
  const setWorkTitleChange = (value) => {
    setWorkTitle(value);
  }
  const setResponsibilitiesChange = (value) => {
    setResponsibilities(value);
  }
  const setStartExpDateChange = (value) => {
    setStartExpDate(value);
  }
  const setEndExpDateDateChange = (value) => {
    setEndExpDate(value);
  }

  const submitExpSetter= () =>  setExp(true);

  return (
    <>
    <Contact 
    nameStateFn={setNameChange} 
    emailStateFn={setEmailChange}
    phoneStateFn={setPhoneChange}
    submited={contactSubmited}
    submitSetter = {submitSetter}
    nameState ={name}
    emailState ={email}
    phoneState ={phone}
    />

    <Education
        schoolStateFn={setSchoolChange} 
        studyStateFn={setStudyChange}
        startDateStateFn={setStudyStartDateChange}
        endDateStateFn={setStudyEndDateChange}
        submited={eduSubmited}
        submitSetter = {submitEduSetter}
        schoolState ={school}
        studyState ={study}
        startDateState ={studyStartDate}
        endDateState ={studyEndDate} />
    <Experience 
            companyStateFn={setCompanylChange} 
            workTitleStateFn={setWorkTitleChange}
            responsibilitiesStateFn ={setResponsibilitiesChange}
            startDateStateFn={setStartExpDateChange}
            endDateStateFn={setEndExpDateDateChange}
            submited={expSubmited}
            submitSetter = {submitExpSetter}
            companyState ={company}
            workTitleState ={workTitle}
            responsibilitiesState = {responsibilities}
            startDateState ={startExpDate}
            endDateState ={endExpDate} />

    <CV name= {name} email ={email} phone = {phone} 
    school ={school} study ={study} studyStartDate ={studyStartDate} studyEndDate = {studyEndDate}
    company ={company} workTitle = {workTitle} responsibilities ={responsibilities}
    startExpDate ={startExpDate}
    endExpDate = {endExpDate}  />
    </>);
}


export default App;
