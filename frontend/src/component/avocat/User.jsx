import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Navbar from '../NavBar';
import './User.css'; 

const User = () => {
    return (
        <div className='container-main'>
            <Navbar />
            <GoogleOAuthProvider clientId="550304099204-e63kihkq41vduh8r8ekmd63s2322jr21.apps.googleusercontent.com">
                <div className='register'>
                    <h1>You haven't registered yet?</h1>
                    <h2>Start Now!</h2>
                </div>

                <div className='google-login-container'>
                    <GoogleLogin
                        className='google-login-button'
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
            </GoogleOAuthProvider>
        </div>
    );
};

export default User;