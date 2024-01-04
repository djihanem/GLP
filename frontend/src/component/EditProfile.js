import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Editprofile.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditProfile = () => {
  // const [lawyer, setLawyer] = useState({
  //   id: 1,
  //   firstname: "John Doe",
  //   secondname: " Doe",
  //   speciality: "Droit civil",
  //   rating: 4.5,
  //   description: "John Doe has been practicing civil law for over 10 years...",
  //   image: "", // You can handle the image as a file
  //   phone: "123-456-7890",
  //   email: "johndoe@example.com",
  //   languages: ["Français", "Anglais"],
  //   skills: ["Mediation", "Litigation", "Contract Law"],
  //   experiences: [
  //     {
  //       title: "Senior Associate at XYZ Law Firm",
  //       description:
  //         "Handled a variety of civil cases and provided legal counsel...",
  //       date: "2010 - 2020",
  //     },
  //     {
  //       title: "Partner at ABC Law Firm",
  //       description:
  //         "Led the civil litigation team and managed high-profile cases...",
  //       date: "2020 - Present",
  //     },
  //   ],
  //   address: "123 Lawyer Street, City, Country",
  //   comments: [
  //     "Great lawyer! Helped me with my divorce case.",
  //     "Very professional and knowledgeable.",
  //     "Highly recommended!",
  //     "Always available when needed.",
  //   ],
  // });
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lawyerId = searchParams.get("id");

  let [lawyer, setLawyer] = useState({});

  useEffect(() => {
    getLawyer(); // Add parentheses to call the function
  }, [lawyerId]);

  let getLawyer = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/Lawyers/${lawyerId}/`
    );
    let data = await response.json();
    setLawyer(data);
  };

  let updateLawyer = async () => {
    fetch(`http://127.0.0.1:8000/api/Lawyers/${lawyerId}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lawyer),
    });
  };

  const availableLanguages = [
    "Français",
    "Anglais",
    "Español",
    "Deutsch",
    "Italiano",
    "Português",
  ];

  const handleSubmit = (e) => {
    updateLawyer();
    e.preventDefault();
    //navigate("/editprofile");
    window.location.reload(); // Recharge la page après la soumission du formulaire
    console.log("Updated lawyer profile:", lawyer);
  };

  return (
    <div className="edit-lawyer-profile">
      <NavBar />
      <div className="editing-section">
        <h2>Edit Lawyer Profile</h2>
        <form className="profile-form">
          <div className="form-group-img">
            <label htmlFor="image">Upload Picture:</label>
            <input type="file" id="image" name="image" accept="image/*" />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={lawyer.firstName}
              onChange={(e) => {
                setLawyer({ ...lawyer, firstName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="secondName">Second Name:</label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              value={lawyer.secondName}
              onChange={(e) => {
                setLawyer({ ...lawyer, secondName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialite">Speciality:</label>
            <input
              type="text"
              id="specialite"
              name="specialite"
              value={lawyer.specialite}
              onChange={(e) => {
                setLawyer({ ...lawyer, specialite: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={lawyer.description}
              onChange={(e) => {
                setLawyer({ ...lawyer, description: e.target.value });
              }}
            ></textarea>
          </div>

          <div className="form-group-lang">
            <label htmlFor="langues">Languages:</label>
            <select
              id="langues"
              name="languages"
              multiple
              value={lawyer.langues}
              onChange={(e) => {
                setLawyer({ ...lawyer, langues: e.target.value });
              }}
            >
              {availableLanguages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={lawyer.phoneNumber}
              onChange={(e) => {
                setLawyer({ ...lawyer, phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={lawyer.email}
              onChange={(e) => {
                setLawyer({ ...lawyer, email: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="adresse">Address:</label>
            <textarea
              id="adresse"
              name="adresse"
              value={lawyer.adresse}
              onChange={(e) => {
                setLawyer({ ...lawyer, adresse: e.target.value });
              }}
            ></textarea>
          </div>
          {/* For more advanced fields, consider using components like MultiSelect for skills, experiences, etc. */}
          <button type="submit" className="save-button" onClick={handleSubmit}>
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
