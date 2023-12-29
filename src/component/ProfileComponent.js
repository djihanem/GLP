import React from 'react';
import './profile.css'; // Assuming you might have some styles for this component

const ProfileComponent = ({ lawyer }) => {
    if (!lawyer) {
        return <div>No lawyer selected.</div>;
    }

    return (
        <div className="profile-container">
            <img src={lawyer.image} alt={lawyer.name} className="profile-image" />
            <div className="profile-details">
                <h2>{lawyer.name}</h2>
                <p><strong>Speciality:</strong> {lawyer.speciality}</p>
                <p><strong>Rating:</strong> {lawyer.rating}</p>
                <p><strong>Description:</strong> {lawyer.description}</p>
                {/* Add any other profile details or components you might need */}
            </div>
        </div>
    );
};

export default ProfileComponent;
