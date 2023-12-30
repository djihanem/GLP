import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import "./Editprofile.css";

const EditProfile = () => {
    const [lawyer, setLawyer] = useState({
        id: 1,
        name: "John Doe",
        speciality: "Droit civil",
        rating: 4.5,
        description: "John Doe has been practicing civil law for over 10 years...",
        image: '', // You can handle the image as a file
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
        address: "123 Lawyer Street, City, Country",
        comments: [
            "Great lawyer! Helped me with my divorce case.",
            "Very professional and knowledgeable.",
            "Highly recommended!",
            "Always available when needed."
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLawyer(prevLawyer => ({
            ...prevLawyer,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Updated lawyer profile:', lawyer);
    };

    return (
        <div className="edit-lawyer-profile">
        <NavBar />
        <div className="editing-section">
            <h2>Edit Lawyer Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={lawyer.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="speciality">Speciality:</label>
                    <input type="text" id="speciality" name="speciality" value={lawyer.speciality} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={lawyer.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={lawyer.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={lawyer.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" value={lawyer.address} onChange={handleChange}></textarea>
                </div>
                {/* For more advanced fields, consider using components like MultiSelect for skills, experiences, etc. */}
                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
        <Footer />
    </div>
    );
};

export default EditProfile;
