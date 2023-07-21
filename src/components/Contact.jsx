function Contact({nameStateFn, emailStateFn,
   phoneStateFn, submited, submitSetter, nameState,
  emailState,
  phoneState }){
  
  let name = nameState;
  let email = emailState;
  let phone = phoneState;
  const handleNameChange = (e) => {
    name = e.target.value;
  }
  const handleEmailChange = (e) => {
    email = e.target.value;  }
  const handlePhoneChange = (e) => {
    phone = e.target.value;  }

  const handleSubmit = (e) => {
    e.preventDefault();
    nameStateFn(name);
    emailStateFn(email);
    phoneStateFn(phone);
    submitSetter();
  }

  return(
  <form onSubmit={handleSubmit}>
    <legend>Contact Info</legend>
    <label>Name</label>
    <input key='name' type="text" required onChange={handleNameChange} />
    <label>Email</label>
    <input key='email' type="email" required onChange={handleEmailChange} />
    <label>Phone Number</label>
    <input key='phone' type="phone" required onChange={handlePhoneChange}/>
    <div>
      {!submited && <button>Submit
      </button>}
      {submited && <button >Edit
      </button>}
    </div>
  </form>);
}

export default Contact;