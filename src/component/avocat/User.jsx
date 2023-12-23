import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Navbar from '../NavBar';
import './User.css'; // Make sure to adjust the path

const User = () => {
    return (
        <div className='container-main'>
            <Navbar />
            <GoogleOAuthProvider clientId="743505389927-hjfqqjm0hf0cvh4r1sc9icuu5qscq84f.apps.googleusercontent.com">
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