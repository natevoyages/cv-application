import { useState } from "react";
import '../styles/App.css'
import CV from "./CV";
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';

function App() {
  const[name, setName] = useState('Name');
  const[email, setEmail] = useState('Email');
  const[phone, setPhone] = useState('Phone');
  const[contactStatus, setContact] = useState('pending');
  const[school, setSchool] = useState('School');
  const[study, setStudy] = useState('Field of study');
  const[studyStartDate, setStudyStartDate] = useState('Start Date');
  const[studyEndDate, setStudyEndDate] = useState('End Date');
  const[eduStatus, setEdu] = useState('pending');
  const[company, setCompany] = useState('Company Name');
  const[workTitle, setWorkTitle] = useState('Work Title');
  const[responsibilities, setResponsibilities] = useState('Responsibilities');
  const[startExpDate, setStartExpDate] = useState('Start Date');
  const[endExpDate, setEndExpDate] = useState('End Date');
  const[expStatus, setExp] = useState('pending');

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
  const submitSetter= () =>   {
    if(contactStatus == 'pending'){
      setContact('submitted');
    }
    else if(contactStatus == 'submitted'){
      setContact('edit')
    }
    else if(contactStatus == 'edit'){
      setContact('submitted')
    }
  };

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
  const submitEduSetter= () =>  {
    if(eduStatus == 'pending'){
      setEdu('submitted');
    }
    else if(eduStatus == 'submitted'){
      setEdu('edit')
    }
    else if(eduStatus == 'edit'){
      setEdu('submitted')
    }
  };

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

  const submitExpSetter= () =>  { 
    if(expStatus == 'pending'){
      setExp('submitted');
    }
    else if(expStatus == 'submitted'){
      setExp('edit')
    }
    else if(expStatus == 'edit'){
      setExp('submitted')
    }
  };

  return (
    <>
    <nav>
      <h1>CV Application</h1>
    </nav>
    <main>
      <section className="forms">
      <Contact 
        nameStateFn={setNameChange} 
        emailStateFn={setEmailChange}
        phoneStateFn={setPhoneChange}
        status={contactStatus}
        submitSetter = {submitSetter}
      />

      <Education
        schoolStateFn={setSchoolChange} 
        studyStateFn={setStudyChange}
        startDateStateFn={setStudyStartDateChange}
        endDateStateFn={setStudyEndDateChange}
        status={eduStatus}
        submitSetter = {submitEduSetter} />
      <Experience 
            companyStateFn={setCompanylChange} 
            workTitleStateFn={setWorkTitleChange}
            responsibilitiesStateFn ={setResponsibilitiesChange}
            startDateStateFn={setStartExpDateChange}
            endDateStateFn={setEndExpDateDateChange}
            status={expStatus}
            submitSetter = {submitExpSetter}/>
      </section>
        <aside>
        <CV name= {name} email ={email} phone = {phone} 
        school ={school} study ={study} studyStartDate ={studyStartDate} studyEndDate = {studyEndDate}
        company ={company} workTitle = {workTitle} responsibilities ={responsibilities}
        startExpDate ={startExpDate}
        endExpDate = {endExpDate}  />
      </aside>
    </main>
    <footer>Natevoyages @2023</footer>
    </>);
}


export default App;
