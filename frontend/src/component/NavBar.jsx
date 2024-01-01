import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';
// import './avocat/LogInSignUpAvocat'; 
import LogInSignUpAvocat from "./avocat/LogInSignUpAvocat";

function Navbar() {
  const navRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header>
        <h3>logo</h3>
        <nav ref={navRef}>
          <a href="./Home">Home</a>
          <a href="./Lawyer">Lawyer</a>
          <a href="#about">About Us</a>
          <a href="#servicess">Services</a>
          <a href="#contact">Contact Us</a>

          {/* Le bouton du menu déroulant */}
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
             Inscription
              {/* {isDropdownOpen ? <FaTimes /> : <FaBars />} */}
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="./LogInSignUpAvocat">Lawyer</a>
                <a href="./User">User</a>
                
              </div>
            )}
          </div>

          {/* Ancien lien "Login/Sign Up" */}
          {/* <a href="./avocat/LogInSignUpAvocat">Login/Sign Up</a> */}

          {/* Au lieu du lien, vous pouvez inclure ici votre composant LogInSignUpAvocat */}
          {/* <LogInSignUpAvocat /> */}
          
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
             <FaTimes /> 
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
           <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;