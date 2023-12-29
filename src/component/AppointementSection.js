import React, { useState } from 'react';

const AppointmentSection = () => {
    const availableSlots = [
        'January 1, 2024 09:00:00',
        'January 1, 2024 10:00:00',
        'January 2, 2024 11:00:00',
        // Add more slots as needed
    ];

    const [selectedSlot, setSelectedSlot] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSlotChange = (e) => {
        setSelectedSlot(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can send the selectedSlot to your backend or perform other actions
        console.log(`Selected slot: ${selectedSlot}`);
        setSubmitted(true);
    };

    return (
        <section className="appointment-section">
            <h2>Rendez-vous</h2>
            <form onSubmit={handleSubmit}>
                <p>Choisissez une date et heure pour votre rendez-vous :</p>
                
                {/* Dropdown to select available time slots */}
                <select value={selectedSlot} onChange={handleSlotChange}>
                    <option value="">Sélectionnez une heure</option>
                    {availableSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                            {new Date(slot).toLocaleString()}
                        </option>
                    ))}
                </select>
                
                {/* Submit button */}
                <button type="submit">Réserver</button>
            </form>
            
            {/* Display confirmation message after submission */}
            {submitted && (
                <div>
                    Vous avez réservé un rendez-vous pour : {new Date(selectedSlot).toLocaleString()}
                </div>
            )}
        </section>
    );
};

export default AppointmentSection;
