import React from 'react';
import './profile.css'; 
import { useState,useEffect } from 'react';
import AppointmentSection from './AppointementSection';
import lawyer1 from "./pic/lawyers/lawyer1.jpeg";
import NavBar from './NavBar';
import Footer from './Footer';

const Profile = () => {
    const [showAllComments, setShowAllComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');


    const lawyer =
        {
            id: 1,
            name: "John Doe",
            speciality: "Droit civil",
            rating: 4.5,
            description: "John Doe has been practicing civil law for over 10 years...",
            image: lawyer1,
            phone: "123-456-7890",
            email: "johndoe@example.com",
            languages: ["Français", "Anglais"],
            skills: ["Mediation", "Litigation", "Contract Law"],
            experiences: [
                {
                    title: "Senior Associate at XYZ Law Firm",
                    description: "Handled a variety of civil cases and provided legal counsel...",
                    date: "2010 - 2020"
                },
                {
                    title: "Partner at ABC Law Firm",
                    description: "Led the civil litigation team and managed high-profile cases...",
                    date: "2020 - Present"
                }
            ],
            address: (
                <div className="map-carte">
                    <p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102439.54174620449!2d4.8550631212012645!3d36.6447804553586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d2e53efa9d9cf%3A0x6ea31897a5bddc54!2sAmizour!5e0!3m2!1sfr!2sdz!4v1703300570108!5m2!1sfr!2sdz" 
                            width="600" 
                            height="450" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </p>
                </div>
            ),
            comments: [
                "Great lawyer! Helped me with my divorce case.",
                "Very professional and knowledgeable.",
                "Highly recommended!",
                "Always available when needed."
                // ... other comments
            ]
        }
    

    // Assuming the lawyer object has a comments array property
    useEffect(() => {
        if (lawyer && lawyer.comments) {
            setComments(lawyer.comments);
        }
    }, [lawyer]);


    const displayedComments = showAllComments ? comments : comments.slice(0, 3);

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments(prevComments => [...prevComments, newComment]);
            setNewComment(''); // Clear the input field after adding the comment
        }
    };

    return (
        <div className="profile">
            {/* navbar */}
        <NavBar/>
<div className="profile-container">


            <div className="first">
            <div className="profile-header">
                <h1>{lawyer.name}</h1>
                <img src={lawyer.image} alt={lawyer.name} className="profile-image" />
            </div>
            
            {/* Basic Information Section */}
            <section className="basic-info-section">
                <h2>Informations de Base</h2>
                <p><strong>Spécialité:</strong> {lawyer.speciality}</p>
                <p><strong>Coordonnées:</strong> {lawyer.phone} | {lawyer.email}</p>
                <p><strong>Langues parlées:</strong> {lawyer.languages.join(', ')}</p>
            </section>

            {/* Skills and Experience Section */}
            <section className="skills-experience-section">
                <h2>Compétences et Expériences</h2>
                <ul>
                    {lawyer.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <div className="experiences">
                    {lawyer.experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h3>{exp.title}</h3>
                            <p>{exp.description}</p>
                            <p>{exp.date}</p>
                        </div>
                    ))}
                </div>
            </section>

             {/* Google Maps Section */}
             <section className="map-section">
                {/* You can integrate Google Maps API here or use a library */}
                <h2>Carte Géographique</h2>
                <p>{lawyer.address}</p>
            </section>

            </div>
            {/*  secoooooooooooooooooooooooooond */}


                        <div className="second">
                                {/* Reviews Section */}
<section className="reviews-section">
                <h2>Commentaires et Évaluations</h2>
                <ul className="comment-list">
                    {displayedComments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
                {comments.length > 3 && (
                    <button onClick={() => setShowAllComments(!showAllComments)}>
                        {showAllComments ? 'Voir moins' : 'Voir tous les commentaires'}
                    </button>
                )}
                 {/* Input field for adding a new comment */}
    <div className="add-comment-section">
        <input 
            type="text" 
            placeholder="Ajouter un commentaire..." 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            className="comment-input" 
        />
        <button onClick={handleAddComment} className="add-comment-btn">Ajouter</button>
    </div>
            </section>
             {/* Appointment Section */}
             <AppointmentSection/>
                        </div>
           



                        </div>
                        <Footer/>
        </div>
    );
};

export default Profile;
