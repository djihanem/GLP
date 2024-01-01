import React, { useState } from 'react';
import axios from 'axios';
import './LogInSignUpAvocat.css';
import email_icon from '../pic/email.png';
import password_icon from '../pic/password.png';
import number_icon from '../pic/number.png';

const LogInSignUpAvocat = () => {

  const [action,setAction]=useState("Login")
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  }

  const handleSubmit1 = async (e) => {
    e.preventDefault()
    try {
      const response = await signUpUser(formData)
      console.log(response)
    } catch (error) {
      console.error('Error signing up:', error)
    }
  }

  const signUpUser = async (formData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', formData)
      return response.data
    } catch (error) {
      throw new Error('Failed to sign up')
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()
    try {
      const response = await loginUser(formData)
      console.log(response)
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  const loginUser = async (formData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', formData)
      return response.data
    } catch (error) {
      throw new Error('Failed to login')
    }
  }

  return (
    <div className='container'>
        <div className="header">
         <div className="text">{action}</div>
         <div className="underline"></div>
       </div>

       <form onSubmit={action === "Login" ? handleSubmit2 : handleSubmit1}>
       <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
              <input type="text" name = 'firstName' placeholder='First Name' onChange={handleChange} />
            </div> 
            }
            {action==="Login"?<div></div>:<div className="input">
              <input type="text" name = 'secondName' placeholder='Second Name' onChange={handleChange} />
            </div> 
            
            }
            {action==="Login"?<div></div>:<div className="input">
             <img src={number_icon} alt="" />
              <input type="text"  name = 'phoneNumber' placeholder='phone number' onChange={handleChange}/>
             
            </div>
            }

            

            <div className="input">
             <img src={email_icon} alt="" />
              <input type="email" name = 'email' placeholder='Email ID' onChange={handleChange} />
            </div>

            

            <div className="input">
              <img src={password_icon} alt="" />
             <input type="password" name = 'password' placeholder='Password' onChange={handleChange} />
           </div>
          </div>
          {action==="Sign Up"? <div></div>: <div className="forgot-password">Lost Password ? <span><a href="#">Click Here</a></span></div>   }
       
          <div className="submit-container">
            <button type = 'submit' className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
            <button type = 'submit' className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>
          </div>
       </form>
    
        

    </div>
   
  )
}

export default LogInSignUpAvocat