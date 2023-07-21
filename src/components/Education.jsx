function Education({schoolStateFn, studyStateFn,
  startDateStateFn, endDateStateFn,submited,
   submitSetter, schoolState,
 studyState,
 startDateState, endDateState}){
  let school = schoolState;
  let study = studyState;
  let startDate = startDateState;
  let endDate = endDateState;

  const handleSchoolChange = (e) => {
    school = e.target.value;
  }
  const handleStudyChange = (e) => {
    study = e.target.value;
  }
  const handleStartDateChange = (e) => {
    startDate = e.target.value;
  }
  const handleEndDateChange = (e) => {
    endDate = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    schoolStateFn(school);
    studyStateFn(study);
    startDateStateFn(startDate);
    endDateStateFn(endDate);
    submitSetter();
  }
  

  return(
  <form onSubmit={handleSubmit}>
    <legend>Education Info</legend>
    <label>School</label>
    <input key='school' type="text" required onChange={handleSchoolChange} />
    <label>Title of Study</label>
    <input key='study' type="text" required onChange={handleStudyChange} />
    <label>Start Date</label>
    <input key='start-date' type="date" required onChange={handleStartDateChange}/>
    <label>End Date</label>
    <input key='start-date' type="date" required onChange={handleEndDateChange}/>
    <div>
      <button> {!submited ? 'Submit' : 'edit'}
      </button>
    </div>
  </form>)
}

export default Education;