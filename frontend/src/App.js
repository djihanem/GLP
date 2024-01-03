import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/containers/Home';
import About from './component/containers/About'
import Lawyer from './component/containers/Lawyer';
import User from './component/avocat/User';
import Footer from './component/Footer';
import Profile from './component/Profile';
import EditProfile from './component/EditProfile';
import AppointmentSection from './component/AppointementSection';
import SignUpAvocat from './component/avocat/SignUpAvocat';
import LoginAvocat from './component/avocat/loginAvocat';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Home/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About />}/>
         <Route path="/lawyer" element={<Lawyer />}/>
         <Route path="/user" element={<User/>}/>
         <Route path="/footer" element={<Footer/>}/>
         <Route path='/profil' element={<Profile/>}/>
         <Route path='/editprofile' element={<EditProfile/>}/>
         <Route path='/rendezvous' element={<AppointmentSection/>}/>
         <Route path="/SignUpAvocat" element={<SignUpAvocat />} />
         <Route path="/loginAvocat" element={<LoginAvocat />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
