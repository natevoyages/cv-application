
function Experience({            
  companyStateFn,
  workTitleStateFn,
  responsibilitiesStateFn,
  startDateStateFn,
  endDateStateFn,
  submited,
  submitSetter,
  companyState,
  workTitleState,
  responsibilitiesState,
  startDateState,
  endDateState}){
  let company = companyState;
  let workTitle = workTitleState;
  let responsibilities = responsibilitiesState;
  let startDate = startDateState;
  let endDate = endDateState;

  const handleCompanyChange = (e) => {
    company = (e.target.value);
  }
  const handleWorkTitleChange = (e) => {
    workTitle = (e.target.value);
  }
  const handleResponsibilitiesChange = (e) => {
    responsibilities = (e.target.value);
  }
  const handleStartDateChange = (e) => {
    startDate = (e.target.value);
  }
  const handleEndDateChange = (e) => {
    endDate = (e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    companyStateFn(company);
    workTitleStateFn(workTitle);
    responsibilitiesStateFn(responsibilities);
    startDateStateFn(startDate);
    endDateStateFn(endDate);
    submitSetter();

  }

  return(
  <form onSubmit={handleSubmit}>
    <legend>Experience</legend>
    <label>Company Name</label>
    <input key='company' type="text" required onChange={handleCompanyChange} />
    <label>Position Title</label>
    <input key='position' type="text" required onChange={handleWorkTitleChange} />
    <label>Resposibilities</label>
    <textarea key='responsibilities' type="text" required onChange={handleResponsibilitiesChange} />
    <label>Start Date</label>
    <input key='start-date' type="date" required onChange={handleStartDateChange}/>
    <label>End Date</label>
    <input key='end-date' type="date" required onChange={handleEndDateChange}/>
    <div>
      <button>{!submited ? 'Submit' : 'Edit'}</button>
    </div>
  </form>)
}

export default Experience;