import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/containers/Home';
import About from './component/containers/About'
import Lawyer from './component/containers/Lawyer';
import User from './component/avocat/User';
import Footer from './component/Footer';
import ProfileComponent from './component/ProfileComponent';


//import Utilisateur from './component/avocat/utilisateur';
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
         <Route path='/profile/:id' element={<ProfileComponent/>}/>
         
         
        
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
