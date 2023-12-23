import React from 'react';
import './Footer.css'; 
import { FaInstagram , FaFacebook,FaTwitter} from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-container">
        <div className="column">
          <h3>Logo</h3>
          <p>About our company and mission.</p>
        </div>
        <div className="column">
          <h3>Quick Links</h3>
          <ul className="link-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <p>Email: company@mouhami.dz</p>
          <p>Phone: +2135678932</p>
         <a href="#"><FaInstagram/></a>
          <a href="#">< FaFacebook/></a>
          <a href="#"><FaTwitter/></a>
          
        </div>
      </div>
      <div className="copy-right">
        <p>&copy; {new Date().getFullYear()} Mouhami DZ</p>
      </div>
    </footer>
  );
};

export default Footer;