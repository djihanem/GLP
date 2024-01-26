import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Editprofile.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lawyerId = searchParams.get("id");

  let [lawyer, setLawyer] = useState({});

  useEffect(() => {
    getLawyer(); // Ajoutez des parenthèses pour appeler la fonction
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
    window.location.reload(); // Recharge la page après la soumission du formulaire
    console.log("Profil de l'avocat mis à jour :", lawyer);
  };

  return (
    <div className="edit-lawyer-profile">
      <NavBar />
      <div className="editing-section">
        <h2>Modifier le Profil de l'Avocat</h2>
        <form className="profile-form">
          <div className="form-group-img">
            <label htmlFor="image">Télécharger une Photo :</label>
            <input type="file" id="image" name="image" accept="image/*" />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Prénom :</label>
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
            <label htmlFor="secondName">Nom :</label>
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
            <label htmlFor="specialite">Spécialité :</label>
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
            <label htmlFor="description">Description :</label>
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
            <label htmlFor="langues">Langues :</label>
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
            <label htmlFor="phoneNumber">Téléphone :</label>
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
            <label htmlFor="email">Email :</label>
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
            <label htmlFor="adresse">Adresse :</label>
            <textarea
              id="adresse"
              name="adresse"
              value={lawyer.adresse}
              onChange={(e) => {
                setLawyer({ ...lawyer, adresse: e.target.value });
              }}
            ></textarea>
          </div>
          {/* Pour des champs plus avancés, envisagez d'utiliser des composants tels que MultiSelect pour les compétences, expériences, etc. */}
          <button type="submit" className="save-button" onClick={handleSubmit}>
            Enregistrer les Changements
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
