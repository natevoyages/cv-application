import "../styles/CV.css"
function CV({name, email, phone,
    school, study, studyStartDate, studyEndDate,
    company, workTitle, responsibilities, startExpDate,
     endExpDate}){
    return(
        <div className="cv">
        <p className="name">{name}</p>
        <section className="contact">
            <p>{email}</p>
            <p>{phone}</p>
        </section>
        <hr></hr>
        <section className="education">
            <h3>Education</h3>
            <p>{school}</p>
            <p>{study}</p>
            <p>{studyStartDate + ' - ' + studyEndDate}</p>
        </section>
        <hr></hr>
        <section className="experience">
        <h3>Experience</h3>
            <p>{company}</p>
            <p>{workTitle}</p>
            <p>{responsibilities}</p>
            <p>{startExpDate + ' - ' + endExpDate}</p>
        </section>
        </div>
    );
}
export default CV;