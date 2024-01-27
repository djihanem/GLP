import React, { useState, useEffect } from "react";
import "./lawyerlist.css";
import { Link } from "react-router-dom";
import avatar from "./pic/avatar.png";

const LawyerListComponent = ({ lawyersData }) => {
  const [lawyers, setLawyers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (lawyersData.length > 0) {
      setLawyers(lawyersData);
    } else {
      getLawyers();
    }
  }, [lawyersData]);

  const getLawyers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/Lawyers/");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des avocats");
      }

      setLawyers(data);
      setErrorMessage(""); // Réinitialiser le message d'erreur en cas de succès
    } catch (error) {
      console.error("Erreur lors de la récupération des avocats :", error);
      setErrorMessage("Erreur lors de la récupération des avocats");
    }
  };

  return (
    <div className="lawyerslist">
      {errorMessage && <p>{errorMessage}</p>}
      {lawyers.length > 0
        ? lawyers.map((lawyer) => (
            <div key={lawyer.id} className="lawyer-card">
              <img
                src={
                  lawyer.image ? `http://127.0.0.1:8000${lawyer.image}` : avatar
                }
                alt={`${lawyer.firstName} ${lawyer.secondName}`}
                className="profile-image"
              />
              <div className="lawyer-details">
                <h3>
                  {lawyer.firstName} {lawyer.secondName}
                </h3>
                <p>
                  <strong>Langues:</strong> {lawyer.langues}
                </p>
                <p>
                  <strong>Adresse:</strong>{" "}
                  {lawyer.adresse && lawyer.adresse.length > 30
                    ? `${lawyer.adresse.slice(0, 30)}...`
                    : lawyer.adresse}
                </p>

                <p>
                  <strong>Spécialité:</strong>{" "}
                  {lawyer.specialite && lawyer.specialite.length > 30
                    ? `${lawyer.specialite.slice(0, 30)}...`
                    : lawyer.specialite}
                </p>

                <button>
                  <Link to={`/profil/${lawyer.id}`}>Voir le Profil</Link>
                </button>
              </div>
            </div>
          ))
        : !errorMessage && <p>Aucun avocat trouvé</p>}
    </div>
  );
};

export default LawyerListComponent;
