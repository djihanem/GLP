import React, { useState } from 'react';
import axios from 'axios';
import './SignUpAvocat.css';
import email_icon from '../pic/email.png';
import password_icon from '../pic/password.png';
import number_icon from '../pic/number.png';
import { useNavigate } from 'react-router-dom'; // Import de useHistory depuis react-router-dom


const SignUpAvocat = () => {

  let navigate = useNavigate(); // Use useNavigate to get navigation functionality

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObject = new FormData();
      formDataObject.append('firstName', formData.firstName);
      formDataObject.append('secondName', formData.secondName);
      formDataObject.append('phoneNumber', formData.phoneNumber);
      formDataObject.append('email', formData.email);
      formDataObject.append('password', formData.password);
  
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', formDataObject, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      console.log('Signed up:', response.data);
      // Si l'inscription est réussie, redirigez vers la page d'édition du profil
      navigate('/editprofile'); // Redirection vers la page d'édition du profil

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
  <div className='container'>
    
  <div className="header">
    <div className="text">Sign Up</div>
    <div className="underline"></div>
  </div>

  <form onSubmit={handleSubmit}>
    <div className="inputs">
      <div className="input">
        <input type="text" name='firstName' placeholder='First Name' value ={formData.firstName} onChange={handleChange} />
      </div>

      <div className="input">
        <input type="text" name='secondName' placeholder='Second Name' value={formData.secondName} onChange={handleChange} />
      </div>

      <div className="input">
        <img src={number_icon} alt="" />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
      </div>

      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" name='email' placeholder='Email ID' value={formData.email} onChange={handleChange} />
      </div>

      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
      </div>
    </div>

    <div className="forgot-password">
      Already have an account? <span><a href="/LoginAvocat">Login</a></span>
    </div>

    <div className="submit-container">
      <button type='submit' className="submit">Sign Up</button>
    </div>
  </form>
</div>
  );
}

export default SignUpAvocat;