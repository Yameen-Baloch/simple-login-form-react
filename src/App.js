import React, { useState } from 'react';

const App = () =>{
  const[fullName, setFullName] = useState({
    Fname: '',
    Lname: '',
    email: '',
    phone: ''
  });
  

  const eventControl = (e) =>{

    const {name, value} = e.target;

    setFullName((prevValue) =>{
      return{
     ...prevValue,
     [name]: value
      }
      
    })
    
  }


  const Submit = (e) =>{
    e.preventDefault();
    alert("Form Submited");
  }
  return <>
  <form onSubmit={Submit}>
    <div>
    <h1> Hello {fullName.Fname} {fullName.Lname} {fullName.email} {fullName.phone}</h1>

    <input type='text' placeholder='Enter Your Name' name='Fname'
    onChange = {eventControl} value = {fullName.Fname}/>

    <br />

    <input type='text' placeholder='Enter Your Last Name' name='Lname'
    onChange={eventControl} value = {fullName.Lname}/>

    <br />

    <input type='email' placeholder='Enter Your Email' name='email'
    onChange={eventControl} value = {fullName.email}/>

    <br />

    <input type='number' placeholder='Enter Your Phone' name='phone'
    onChange={eventControl} value = {fullName.phone}/>
    
    <button type='submit'>Submit</button>
    </div>
    </form>
  </>
}

export default App;