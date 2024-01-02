import React, { useState } from 'react';
import axios from 'axios';
import './LogInSignUpAvocat.css';
import email_icon from '../pic/email.png';
import password_icon from '../pic/password.png';
import number_icon from '../pic/number.png';

const LogInSignUpAvocat = () => {
  const [action, setAction] = useState('Login');
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (action === 'Login') {
        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
          email: formData.email,
          password: formData.password,
        });
        console.log('Logged in:', response.data);
      } else {
        const response = await axios.post('http://127.0.0.1:8000/api/signup/', formData);
        console.log('Signed up:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action !== 'Login' && (
          <>
            <div className='input'>
              <input type='text' name='firstName' placeholder='First Name' onChange={handleChange} />
            </div>

            <div className='input'>
              <input type='text' name='secondName' placeholder='Second Name' onChange={handleChange} />
            </div>

            <div className='input'>
              <img src={number_icon} alt='' />
              <input type='text' name='phoneNumber' placeholder='phone number' onChange={handleChange} />
            </div>
          </>
        )}

        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' name='email' placeholder='Email ID' onChange={handleChange} />
        </div>

        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' name='password' placeholder='Password' onChange={handleChange} />
        </div>
      </div>

      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className='forgot-password'>
          Lost Password ? <span><a href='#'>Click Here</a></span>
        </div>
      )}

      <div className='submit-container'>
        <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>
          Sign Up
        </div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
          Login
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default LogInSignUpAvocat;
