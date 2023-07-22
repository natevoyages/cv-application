import { useState } from "react";

function Experience({            
  companyStateFn,
  workTitleStateFn,
  responsibilitiesStateFn,
  startDateStateFn,
  endDateStateFn,
  status,
  submitSetter}){
    const[company, setCompany] = useState('');
    const[workTitle, setWorkTitle] = useState('');
    const[responsibilities, setResponsibilities] = useState('');
    const[startDate, setStartExpDate] = useState('');
    const[endDate, setEndExpDate] = useState('');

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  }
  const handleWorkTitleChange = (e) => {
    setWorkTitle(e.target.value);
  }
  const handleResponsibilitiesChange = (e) => {
    setResponsibilities(e.target.value);
  }
  const handleStartDateChange = (e) => {
    setStartExpDate(e.target.value);
  }
  const handleEndDateChange = (e) => {
    setEndExpDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    companyStateFn(company);
    workTitleStateFn(workTitle);
    responsibilitiesStateFn(responsibilities);
    startDateStateFn(startDate);
    if(endDate == ''){
      endDateStateFn('present');
    }
    else{
    endDateStateFn(endDate);
    }
    submitSetter();

  }

  return(
  <form onSubmit={handleSubmit}>
    <legend>Experience</legend>
    {(status == 'edit' || status == 'pending') && <>
    <label>Company Name</label>
    <input key='company' type="text" value={company} required onChange={handleCompanyChange} />
    <label>Position Title</label>
    <input key='work-title' type="text" value={workTitle} required onChange={handleWorkTitleChange} />
    <label>Resposibilities</label>
    <textarea key='responsibilities' type="text" value={responsibilities} required onChange={handleResponsibilitiesChange} />
    <label>Start Date</label>
    <input key='start-date' type="date" value={startDate} required onChange={handleStartDateChange}/>
    <label>End Date</label>
    <input key='end-date' type="date" value={endDate}  onChange={handleEndDateChange}/>
    <div>
      <button>Submit</button>
    </div> </>}
    {(status == 'submitted') && <div><button >Edit
      </button> </div>}
  </form>)
}

export default Experience;