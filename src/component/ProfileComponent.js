import React from 'react';
import './profile.css'; 
import { useState,useEffect } from 'react';
import AppointmentSection from './AppointementSection';

const ProfileComponent = ({ lawyer }) => {
    const [showAllComments, setShowAllComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    

    // Assuming the lawyer object has a comments array property
    useEffect(() => {
        if (lawyer && lawyer.comments) {
            setComments(lawyer.comments);
        }
    }, [lawyer]);

    if (!lawyer) {
        return <div>No lawyer selected.</div>;
    }

    const displayedComments = showAllComments ? comments : comments.slice(0, 3);

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments(prevComments => [...prevComments, newComment]);
            setNewComment(''); // Clear the input field after adding the comment
        }
    };

    return (
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
    );
};

export default ProfileComponent;
