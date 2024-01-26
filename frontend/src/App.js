import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/containers/Home";
import About from "./component/containers/About";
import Lawyer from "./component/containers/Lawyer";
import User from "./component/avocat/User";
import Footer from "./component/Footer";
import Profile from "./component/Profile";
import EditProfile from "./component/EditProfile";
import AppointmentSection from "./component/AppointementSection";
import SignUpAvocat from "./component/avocat/SignUpAvocat";
import SignupUser from "./component/user/SignupUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/avocat" element={<SignUpAvocat />} />
          <Route path="/userSignup" element={<SignupUser />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/profil/:idlawyer" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route
            path="/rendezvous/:idlawyer"
            element={<AppointmentSection />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
