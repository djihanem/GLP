import React from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 
import "./profile.css";
import { useState, useEffect } from "react";
import AppointmentSection from "./AppointementSection";
import lawyer1 from "./pic/lawyers/lawyer1.jpeg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import avatar from "./pic/avatar.png";
import StarRating from "./StarRating";

const Profile = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
  };
  let { idlawyer } = useParams();

  let [commentaires, setCommentaires] = useState([]);

  useEffect(() => {
    getCommentaires();
  }, []);

  // let getCommentaires = async () => {
  //   let response = await fetch("http://127.0.0.1:8000/api/commentaires/");
  //   let data = await response.json();
  //   console.log("DATA", data);
  //   setCommentaires(data);
  // };
  let getCommentaires = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/get-comments-by-lawyer/${idlawyer}/`
    );
    let data = await response.json();
    console.log("DATA", data);
    setCommentaires(data);
  };

  const [showAllComments, setShowAllComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  let [lawyer, setLawyer] = useState({});
  useEffect(() => {
    getLawyer();
  }, [idlawyer]);

  let getLawyer = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/Lawyers/${idlawyer}/`
    );
    let data = await response.json();
    setLawyer(data);
  };

  const displayedComments = showAllComments
    ? commentaires
    : commentaires.slice(0, 3);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="profile">
      <NavBar />

      <button onClick={() => changeLanguage('fr')} className='translate'>French</button>
      <button onClick={() => changeLanguage('ar')} className='translate'>العربية</button>

<div className="profile-container">
        <div className="first">
          <div className="profile-header">
            <h1>
              {t('profile.firstName')} {lawyer.secondName}
            </h1>
            <img
              src={lawyer.image ? lawyer.image.url : avatar}
              alt={`${lawyer.firstName} ${lawyer.secondName}`}
              className="profile-image"
            />
          </div>

          <section className="basic-info-section">
            <h2 className="section-title">{t('profile.basicInfo')}</h2>

            <p className="info-item">
              <strong>{t('profile.rating')} : {rating}</strong>
              <StarRating initialRating={rating} onChange={handleRatingChange} />
              <button>Submit</button>
            </p>

            <p className="info-item">
              <strong>{t('profile.specialty')} :</strong> {lawyer.specialite}
            </p>
            <p className="info-item">
              <strong>{t('profile.contactDetails')} :</strong> {lawyer.phoneNumber} | {lawyer.email}
            </p>
            <p className="info-item">
              <strong>{t('profile.languages')} :</strong> {lawyer.langues}
            </p>
          </section>

          <section className="skills-experience-section">
            <h2 className="section-title">{t('profile.skillsAndExperience')}</h2>
            <ul className="skills-list">
              <p className="info-item">
                <strong>{t('profile.description')} :</strong> {lawyer.description}
              </p>
              <li className="skill-item">Médiation</li>
              <li className="skill-item">Droit des contrats</li>
              <li className="skill-item">Contentieux</li>
            </ul>

            <div className="experiences">
              <div className="experience-item">
                <h3 className="experience-title">
                  Associé principal chez XYZ Cabinet d'Avocats
                </h3>
                <p className="experience-description">
                  Gestion d'une variété d'affaires civiles et fourniture de conseils juridiques...
                </p>
              </div>
            </div>
          </section>


          <div className="appointment-section">
            <Link to={`/rendezvous/${idlawyer}`}>
            <button>{t('profile.takeAppointment')}</button>
            </Link>
          </div>
        </div>

        <div className="second">
          <section className="reviews-section">
            <div className="comments">
              <h2 className="section-title">{t('profile.commentsAndRatings')}</h2>
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
                    ? t('profile.viewLess')
                    : t('profile.viewAllComments')}
                </button>
              )}
            </div>

            <div className="add-comment-section">
              <input
                type="text"
                placeholder={t('profile.addComment')}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="comment-input"
              />
              <button onClick={handleAddComment} className="add-comment-btn">
                {t('profile.addCommentBtn')}
              </button>
            </div>
          </section>

          <section className="map-section">
            <h2 className="section-title">{t('profile.geographicalMap')}</h2>
            <p className="address-info">{lawyer.adresse}</p>
            <div className="map-carte">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102439.54174620449!2d4.8550631212012645!3d36.6447804553586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d2e53efa9d9cf%3A0x6ea31897a5bddc54!2sAmizour!5e0!3m2!1sfr!2sdz!4v1703300570108!5m2!1sfr!2sdz"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
