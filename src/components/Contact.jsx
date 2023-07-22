import { useState } from "react";

function Contact({nameStateFn, emailStateFn,
   phoneStateFn, status, submitSetter}){
  
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
  const handleNameChange = (e) => {
     setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);  }

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
    {(status == 'pending' || status == 'edit') && <>
    <label>Name</label>
    <input key='name' type="text" value = {name} required onChange={handleNameChange} />
    <label>Email</label>
    <input key='email' type="email" value ={email}  required onChange={handleEmailChange} />
    <label>Phone Number</label>
    <input key='phone' type="phone" value = {phone} required onChange={handlePhoneChange}/>
    <div>
      <button>Submit</button>
    </div>
    </>}
    {(status == 'submitted') && <div><button >Edit
      </button></div>}
  </form>);
}

export default Contact;