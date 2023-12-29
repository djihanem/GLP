import { useState } from 'react';
import ProfileComponent from "./ProfileComponent";
// LawyerListComponent.js
import React from 'react';

const LawyerListComponent = () => {
    const [selectedLawyerId, setSelectedLawyerId] = useState(null);

    // Array of lawyers directly inside the component
    const lawyers = [
        {
            id: 1,
            name: "John Doe",
            speciality: "Droit civil",
            rating: 4.5
            // Add more properties as needed
        },
        {
            id: 2,
            name: "Jane Smith",
            speciality: "Droit des affaires",
            rating: 4.8
            // Add more properties as needed
        },
        {
            id: 3,
            name: "Robert Johnson",
            speciality: "Droit pénal",
            rating: 4.2
            // Add more properties as needed
        }
        // ... You can add more lawyer objects as needed
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
        <div>
            {lawyers.map(lawyer => (
                <div key={lawyer.id}>
                    <h3>{lawyer.name}</h3>
                    <p>Spécialité: {lawyer.speciality}</p>
                    <p>Note: {lawyer.rating}</p>
                    {/* Ajoutez d'autres détails ici */}
                    <button onClick={() => goToProfile(lawyer.id)}>Voir le profil</button>
                </div>
            ))}
        </div>
    );
};

export default LawyerListComponent;
