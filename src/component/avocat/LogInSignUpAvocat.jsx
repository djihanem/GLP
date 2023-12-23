import React, {useState} from 'react'
import './LogInSignUpAvocat.css';
import email_icon from '../pic/email.png';
import password_icon from '../pic/password.png';
import number_icon from '../pic/number.png';


const LogInSignUpAvocat = () => {

  const [action,setAction]=useState("Login");
  return (
    <div className='container'>
        <div className="header">
         <div className="text">{action}</div>
         <div className="underline"></div>
       </div>
    
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
              <input type="text" placeholder='First Name' />
            </div> 
            
            }
            {action==="Login"?<div></div>:<div className="input">
              <input type="text" placeholder='Second Name' />
            </div> 
            
            }
            {action==="Login"?<div></div>:<div className="input">
             <img src={number_icon} alt="" />
              <input type="text"  placeholder='phone number'/>
             
            </div>
            }

            

            <div className="input">
             <img src={email_icon} alt="" />
              <input type="email" placeholder='Email ID'/>
            </div>

            

            <div className="input">
              <img src={password_icon} alt="" />
             <input type="password" placeholder='Password'/>
           </div>
          </div>
          {action==="Sign Up"? <div></div>: <div className="forgot-password">Lost Password ? <span><a href="#">Click Here</a></span></div>   }
       
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>
   
  )
}

export default LogInSignUpAvocat
