import React, { useEffect, useState } from "react";
import axios from "axios";

const initialValues = {
  username:'',
  password: ''
}
const Login = (props) => {
  const [formValues,setFormValues] = useState(initialValues)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }

  const submit = (e) =>{
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login',formValues) 
    .then(res => {
    localStorage.setItem('token',res.data.payload)
    props.history.push("/bubles")
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        </h1>
        <form onSubmit = {submit}>
          <label htmlFor="username" >Username:   </label>
          <input 
          id = "username"
          type = "text"
          name = "username"
          value = {formValues.username}
          onChange = {handleChange}
          />
         
           <label htmlFor = "password" >Password: </label>
          <input 
          id = "password"
          type = "password"
          name = "password"
          value = {formValues.password}
          onChange = {handleChange}
          />
         
          <button>Log in</button>
        </form>
       
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.