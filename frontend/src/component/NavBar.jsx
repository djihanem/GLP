import React, { useRef, useState } from 'react';
import { FaBars, FaTimes, FaUser} from 'react-icons/fa';
import avocat from './pic/avocat.jpg'
import './NavBar.css';
// import './avocat/LogInSignUpAvocat'; 



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
        <h3><a href="./Home"><img src={avocat}/></a></h3>
        <nav ref={navRef}>
         
          <a href="./Home">Accueil</a>
          
          <a href="./Lawyer">Avocat</a>
          <a href="/Home/#about">À propos de nous</a>
          <a href="/Home/#servicess">Services</a>
          <a href="/Home/#contact">Contactez-nous</a>

          {/* Le bouton du menu déroulant */}
          <div className="dropdown">
          <span style={{ visibility: "hidden" }}>----</span>
            <button className="dropbtn" onClick={toggleDropdown}>
            
            <FaUser />

              {/* {isDropdownOpen ? <FaTimes /> : <FaBars />} */}
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/Avocat">Avocat</a>
                <a href="/User">Utilisateur</a>
                <a href="./Edit Profil">Modifier Profil</a>
                <a href="./Logout">Deconnexion</a>
                
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