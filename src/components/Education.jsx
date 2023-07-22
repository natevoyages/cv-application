import { useState } from "react";

function Education({schoolStateFn, studyStateFn,
  startDateStateFn, endDateStateFn,status,
   submitSetter}){
    const[school, setSchool] = useState('');
    const[study, setStudy] = useState('');
    const[startDate, setStartDate] = useState('');
    const[endDate, setEndDate] = useState('');
  

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }
  const handleStudyChange = (e) => {
    setStudy(e.target.value);
  }
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  }
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    schoolStateFn(school);
    studyStateFn(study);
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
    <legend>Education Info</legend>
    {(status == 'edit' || status == 'pending') &&<>
    <label>School</label>
    <input key='school' type="text" value = {school} required onChange={handleSchoolChange} />
    <label>Title of Study</label>
    <input key='study' type="text" value={study} required onChange={handleStudyChange} />
    <label>Start Date</label>
    <input key='start-date' type="date" value={startDate} required onChange={handleStartDateChange}/>
    <label>End Date</label>
    <input key='start-date' type="date" value={endDate}  onChange={handleEndDateChange}/>
    <div>
      <button> Submit
      </button>
    </div></>}
    {(status == 'submitted') && <div><button >Edit
      </button></div>}
  </form>)
}

export default Education;