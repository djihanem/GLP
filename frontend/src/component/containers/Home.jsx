import Navbar from "../NavBar";
import './Home.css';
import lawyer_icon from '../pic/lawyer.jpg';
import {CiBank} from 'react-icons/ci';
import { GoLaw } from "react-icons/go";
import { BsFillAwardFill } from "react-icons/bs";
import law_icon from '../pic/law.jpg';
import team_one from '../pic/team1.jpg';
import team_two from '../pic/team2.jpg';
import home from '../pic/homee.JPG';
import team_three from '../pic/team3.jpg';
import { MdChat } from "react-icons/md";
import { MdOutlineMiscellaneousServices, MdMediation,MdOutlineFamilyRestroom  } from "react-icons/md";
import { RiCriminalFill } from "react-icons/ri";
import { GiDiscussion } from "react-icons/gi";
import { GrUserPolice } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa6";
import Footer from "../Footer";



const Home = () => {
    return ( 
       
        <main>
         <Navbar/>
         <section id="home">
            <div className="home">
              <div className="my-pic">
                <img src={home} />
              </div>
           </div>
         </section>
           <section id="services">
             
             <div className="cards">             
                  <div className="card-one">
                     <CiBank/>
                     <h1>Bankruptcy</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                  </div>
                  <div className="card-two">
                     <GoLaw/>
                     <h1>Modifications</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                  </div>
                  <div className="card-three">
                     <BsFillAwardFill/>
                     <h1>Foreclosure</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                 </div>
              </div>
           </section>
           <section id="about">
            <div className="aboutus">
                <div className="us">
                    <img src={law_icon} alt="" />
                </div>
                <div className="about">
                    <h2>Who We Are</h2>
                   <h3>About DZ-Mouhami</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim. Integer tincidunt viverra est, non congue</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim. Integer tincidunt viverra est, non congue lorem tempor ac. Sed dolor velit, convallis quis erat in, molestie eleifend enim. Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum vitae iaculis cursus, turpis nisl ultricies massa, sit amet ultrices nunc dui at tellus. Pellentesque porta rutrum erat nec facilisis. Ut iaculis lectus urna, sit amet porttitor erat auctor at.</p>
                    <br/><br />
                  <hr className="line" />
                  <br /><br />
                    <div className="suite">
                      <h2>Instead of Join our Email List - Do you need Answers?</h2>
                      <input type="email" placeholder="put your email" />
                     <button><a href="#">Submit</a></button>
                   </div>
              </div>
            </div>
           </section>
           
         <section id="servicess">
             <h2>Our Services</h2>
             <div className="cards">             
                  <div className="card-one">
                     <MdChat/>
                     <h1>FREE CONSULTING</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                  </div>
                  <div className="card-two">
                     <MdOutlineMiscellaneousServices/>
                     <h1>SPECIAL SERVICES</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                  </div>
                  <div className="card-three">
                     <GiDiscussion/>
                     <h1>DISCUS STRATEGY</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                 </div>
                 <div className="card-one">
                     <GrUserPolice />
                     <h1>CILVILL LAWYERES</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                 </div>
              </div> 
           </section>
           <section id="services">
             
             <div className="cards">             
                  <div className="card-one">
                     < MdMediation />
                     <h1>MEDIATION</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                  </div>
                  <div className="card-two">
                    <MdOutlineFamilyRestroom/>
                     <h1>FAMILY DISPUTES</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                  </div>
                  <div className="card-three">
                     <RiCriminalFill/>
                     <h1>CRIMINALS</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                 </div>
                 <div className="card-one">
                     <FaHandshake/>
                     <h1>BANKRUPTCY</h1>
                     <span>----</span>
                     <p>Morbi semper, dui sodales aliquet imperdiet, lacus ligula congue neque, quis pretium lectus libero id.</p>
                 </div>
              </div> 
           </section>
        
        <section id="contact">
        <div className="last">
           
            <div className="contactus">
             <h2>Get In Touch</h2>
             <h1>Contact</h1>
             <input type="text" placeholder="Your Name" />
             <input type="email" placeholder="Your Email" />
             <textarea id="message" name="message" placeholder="Enter your message here" ></textarea>
             <button><a href="#">Send Message</a></button>
            </div>
        </div>
        </section>
        <Footer/>
      </main>
  );
}
 
export default Home;