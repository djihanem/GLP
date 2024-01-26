import React from "react";
import "./profile.css";
import { useState, useEffect } from "react";
import AppointmentSection from "./AppointementSection";
import lawyer1 from "./pic/lawyers/lawyer1.jpeg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import avatar from "./pic/avatar.png";
import StarRating from './StarRating';


const Profile = () => {
  let { idlawyer } = useParams();

  let [commentaires, setCommentaires] = useState([]);

  useEffect(() => {
    getCommentaires();
  }, []);

  let getCommentaires = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/commentaires/");
    let data = await response.json();
    console.log("DATA", data);
    setCommentaires(data);
  };

  const [showAllComments, setShowAllComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  let [lawyer, setLawyer] = useState({});
  useEffect(() => {
    getLawyer(); // Add parentheses to call the function
  }, [idlawyer]);

  let getLawyer = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/Lawyers/${idlawyer}/`
    );
    let data = await response.json();
    setLawyer(data);
  };
  
  //const chemin_image = `../../../../backend/mouhami${lawyer.image_url}`
  const displayedComments = showAllComments
    ? commentaires
    : commentaires.slice(0, 3);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(""); // Clear the input field after adding the comment
    }
  };


  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    // Do something with the new rating, such as updating it in your state
    setRating(newRating);
  };

  return (
    <div className="profile">
      {/* navbar */}
      <NavBar /> 
      <div className="profile-container">
        <div className="first">
          <div className="profile-header">
            <h1>
              {lawyer.firstName} {lawyer.secondName}
            </h1>
            <img
              //src={lawyer.image || avatar}
              src={lawyer.image ? lawyer.image.url : avatar}
              //src={test}
              //src=`../../../../backend/mouhami${lawyer.image}`
              //src={require(`.${chemin_image}`).default}

              alt={`${lawyer.firstName} ${lawyer.secondName}`}
              className="profile-image"
            />
            {/* <h1> this is ID {idlawyer}</h1> */}
            {/* <button>Editer Le Profile</button> */}
          </div>

          <section className="basic-info-section">
            <h2 className="section-title">Informations de Base</h2>

            <p className="info-item">
              <strong>rating : {rating}</strong>
              <StarRating initialRating={rating} onChange={handleRatingChange} />
            </p>

            <p className="info-item">
              <strong>Spécialité :</strong> {lawyer.specialite}
            </p>
            <p className="info-item">
              <strong>Coordonnées :</strong> {lawyer.phoneNumber} |{" "}
              {lawyer.email}
            </p>
            <p className="info-item">
              <strong>Langues parlées :</strong> {lawyer.langues}
            </p>

            {/* <div className="rate">
              <select className="rate-select">
                <option value="" disabled>
                  Select Rating
                </option>
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <button className="rate-btn">Rate</button>
            </div> */}
          </section>

          {/* Skills and Experience Section */}
          <section className="skills-experience-section">
            <h2 className="section-title">Compétences et Expériences</h2>
            <ul className="skills-list">
              {" "}
              <p className="info-item">
                <strong>Description :</strong> {lawyer.description}
              </p>
              <li className="skill-item">Mediation</li>
              <li className="skill-item">Contract Law</li>
              <li className="skill-item">Litigation</li>
            </ul>
            {/* <ul className="skills-list">
              {lawyer.skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul> */}

            <div className="experiences">
              <div className="experience-item">
                <h3 className="experience-title">
                  Senior Associate at XYZ Law Firm
                </h3>
                <p className="experience-description">
                  Handled a variety of civil cases and provided legal counsel...
                </p>
              </div>
            </div>
          </section>

          {/* Appointment Section */}
          <div className="appointment-section">
            <button>Prendre rendez vous</button>
          </div>
        </div>
        {/*  secoooooooooooooooooooooooooond */}

        <div className="second">
          {/* Reviews Section */}
          <section className="reviews-section">
            <div className="comments">
              <h2 className="section-title">Commentaires et Évaluations</h2>
              <ul className="comment-list">
                {displayedComments.map((comment, index) => (
                  <li key={comment.id} className="comment-card">
                    <img
                      src={avatar}
                      alt={comment.name}
                      className="lawyer-avatar"
                    />
                    <div className="comment-content">
                      <h4>{comment.name}</h4>
                      <p>{comment.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {commentaires.length > 3 && (
                <button
                  onClick={() => setShowAllComments(!showAllComments)}
                  className="center-button"
                >
                  {showAllComments
                    ? "Voir moins"
                    : "Voir tous les commentaires"}
                </button>
              )}
            </div>

            {/* Input field for adding a new comment */}
            <div className="add-comment-section">
              <input
                type="text"
                placeholder="Ajouter un commentaire..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="comment-input"
              />
              <button onClick={handleAddComment} className="add-comment-btn">
                Ajouter
              </button>
            </div>
          </section>
          {/* Google Maps Section */}
          <section className="map-section">
            <h2 className="section-title">Carte Géographique</h2>
            <p className="address-info">{lawyer.adresse}</p>
            <div className="map-carte">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102439.54174620449!2d4.8550631212012645!3d36.6447804553586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d2e53efa9d9cf%3A0x6ea31897a5bddc54!2sAmizour!5e0!3m2!1sfr!2sdz!4v1703300570108!5m2!1sfr!2sdz"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
