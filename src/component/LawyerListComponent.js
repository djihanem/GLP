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
        },
        {
            id: 2,
            name: "Jane Smith",
            speciality: "Droit des affaires",
            rating: 4.8,
            description: "Jane Smith is an expert in business law with a focus on mergers and acquisitions...",
            image: lawyer2,
            phone: "234-567-8901",
            email: "janesmith@example.com",
            languages: ["Français", "Allemand"],
            skills: ["Mergers & Acquisitions", "Corporate Law", "Contract Negotiation"],
            experiences: [
                {
                    title: "Legal Advisor at TechCorp",
                    description: "Advised on numerous M&A transactions and corporate matters...",
                    date: "2015 - 2021"
                },
                {
                    title: "Partner at Legal Solutions Inc.",
                    description: "Specialized in corporate restructuring and business advisory...",
                    date: "2021 - Present"
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
        },
        {
            id: 3,
            name: "Robert Johnson",
            speciality: "Droit pénal",
            rating: 4.2,
            description: "Robert Johnson has a strong background in criminal law...",
            image: lawyer3,
            phone: "345-678-9012",
            email: "robertjohnson@example.com",
            languages: ["Français", "Espagnol"],
            skills: ["Criminal Defense", "Trial Advocacy", "Legal Consultation"],
            experiences: [
                {
                    title: "Public Defender",
                    description: "Defended numerous clients in high-profile criminal cases...",
                    date: "2012 - 2019"
                },
                {
                    title: "Private Practice",
                    description: "Established a successful criminal defense practice...",
                    date: "2019 - Present"
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
        },
        {
            id: 4,
            name: "Emily White",
            speciality: "Droit de la famille",
            rating: 4.6,
            description: "Emily White specializes in family law with a focus on divorce and child custody...",
            image: lawyer1,
            phone: "456-789-0123",
            email: "emilywhite@example.com",
            languages: ["Français", "Italien"],
            skills: ["Family Law", "Mediation", "Child Custody"],
            experiences: [
                {
                    title: "Associate at Family Matters Law Firm",
                    description: "Handled numerous divorce and custody cases...",
                    date: "2010 - 2018"
                },
                {
                    title: "Founder of White Family Law",
                    description: "Established a family law practice with a focus on mediation...",
                    date: "2018 - Present"
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
        },
        {
            id: 5,
            name: "William Brown",
            speciality: "Droit du travail",
            rating: 4.7,
            description: "William Brown is a seasoned labor law attorney...",
            image: lawyer3,
            phone: "567-890-1234",
            email: "williambrown@example.com",
            languages: ["Français", "Portugais"],
            skills: ["Employment Law", "Labor Disputes", "Legal Consultation"],
            experiences: [
                {
                    title: "Senior Associate at Labor Solutions LLC",
                    description: "Handled various labor disputes and advised on employment matters...",
                    date: "2008 - 2017"
                },
                {
                    title: "Principal at Brown & Associates",
                    description: "Established a labor law practice focused on employee rights...",
                    date: "2017 - Present"
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
        },
        {
            id: 6,
            name: "Sophia Martinez",
            speciality: "Droit des biens immobiliers",
            rating: 4.9,
            description: "Sophia Martinez is an expert in real estate law...",
            image: lawyer4,
            phone: "678-901-2345",
            email: "sophiamartinez@example.com",
            languages: ["Français", "Néerlandais"],
            skills: ["Real Estate Law", "Property Transactions", "Landlord-Tenant Disputes"],
            experiences: [
                {
                    title: "Associate at Property Solutions Inc.",
                    description: "Handled property transactions and resolved landlord-tenant disputes...",
                    date: "2010 - 2019"
                },
                {
                    title: "Principal at Martinez Real Estate Law",
                    description: "Established a successful practice focusing on real estate transactions...",
                    date: "2019 - Present"
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
