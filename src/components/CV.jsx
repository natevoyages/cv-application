function CV({name, email, phone,
    school, study, studyStartDate, studyEndDate,
    company, workTitle, responsibilities, startExpDate,
     endExpDate}){
    return(
        <>
        <section>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
        </section>
        <section>
            <h2>{school}</h2>
            <p>{study}</p>
            <p>{studyStartDate}</p>
            <p>{studyEndDate}</p>
        </section>
        <section>
            <h2>{company}</h2>
            <p>{workTitle}</p>
            <p>{responsibilities}</p>
            <p>{startExpDate}</p>
            <p>{endExpDate}</p>
        </section>
        </>
    );
}
export default CV;