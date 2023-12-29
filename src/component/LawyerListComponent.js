// LawyerListComponent.js
import React from 'react';
import { useState } from 'react';
import ProfileComponent from "./ProfileComponent";
import './lawyerlist.css';
import lawyer1 from "./pic/lawyers/lawyer1.jpeg";
import lawyer2 from "./pic/lawyers/lawyer2.jpeg";
import lawyer3 from "./pic/lawyers/lawyer3.jpeg";
import lawyer4 from "./pic/lawyers/lawyer4.jpeg";
const LawyerListComponent = () => {
    const [selectedLawyerId, setSelectedLawyerId] = useState(null);

    const lawyers = [
        {
            id: 1,
            name: "John Doe",
            speciality: "Droit civil",
            rating: 4.5,
            description: "John Doe has been practicing civil law for over 10 years...",
            image: lawyer1
        },
        {
            id: 2,
            name: "Jane Smith",
            speciality: "Droit des affaires",
            rating: 4.8,
            description: "Jane Smith is an expert in business law with a focus on mergers and acquisitions...",
            image: lawyer2
        },
        {
            id: 3,
            name: "Robert Johnson",
            speciality: "Droit pénal",
            rating: 4.2,
            description: "Robert Johnson has a strong background in criminal law and has successfully defended numerous clients...",
            image: lawyer3
        },
        {
            id: 4,
            name: "Robert Johnson",
            speciality: "Droit pénal",
            rating: 4.2,
            description: "Robert Johnson has a strong background in criminal law and has successfully defended numerous clients...",
            image: lawyer4
        }
    ];

    const goToProfile = (id) => {
        setSelectedLawyerId(id);
        console.log(`Navigating to profile of lawyer with ID: ${id}`);
    };

    if (selectedLawyerId) {
        const selectedLawyer = lawyers.find(lawyer => lawyer.id === selectedLawyerId);
        return <ProfileComponent lawyer={selectedLawyer} />;
    }
    
    return (
        <div className='lawyerslist'>
        {lawyers.map(lawyer => (
            <div key={lawyer.id} className="lawyer-card">
                <img src={lawyer.image} alt={lawyer.name} />
                <div className="lawyer-details">
                    <h3>{lawyer.name}</h3>
                    <p>Spécialité: {lawyer.speciality}</p>
                    <p>Note: {lawyer.rating}</p>
                    <p>{lawyer.description}</p>
                </div>
                <button onClick={() => goToProfile(lawyer.id)}>Voir le profil</button>
            </div>
        ))}
    </div>
    );
};

export default LawyerListComponent;
