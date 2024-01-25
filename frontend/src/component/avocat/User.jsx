import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Navbar from '../NavBar';
import Footer from '../Footer';
import './User.css'; // Make sure to adjust the path

const User = () => {
    const [csrfToken, setCsrfToken] = useState(null);

    useEffect(() => {
        // Function to retrieve CSRF token from cookie
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        // Get CSRF token on component mount
        const token = getCookie('csrftoken');
        setCsrfToken(token);
    }, []);

    const handleLoginSuccess = async (credentialResponse) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/google/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken || '', 
                },
                body: JSON.stringify({
                    idToken: credentialResponse.tokenId,
                }),
                credentials: 'include',
            }); 
            
            console.log('Payload:', credentialResponse);

            if (response.ok) {
                console.log('Login successful');
            } else {
                console.log('Login failed on the backend');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    return (
        <div className='container-main'>
            <Navbar />
            <GoogleOAuthProvider clientId="743505389927-hjfqqjm0hf0cvh4r1sc9icuu5qscq84f.apps.googleusercontent.com">
                <div className='register'>
                    <h1>Vous n'êtes pas encore inscrit ?</h1>
                    <h2>Commencez maintenant!</h2>
                </div>

                <div className='google-login-container'>
                    <GoogleLogin
                        className='google-login-button'
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                    />
                </div>
            </GoogleOAuthProvider>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer/>
        </div>
    );
};

export default User;