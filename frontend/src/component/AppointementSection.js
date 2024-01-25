import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './rendezvous.css';

const AppointmentSection = () => {
    const lawyerTokenTimes = [
        { date: 'January 1, 2024', hour: '09:00:00', clientName: 'Client A' },
        { date: 'January 1, 2024', hour: '10:00:00', clientName: 'Client B' },
        { date: 'January 2, 2024', hour: '11:00:00', clientName: 'Client C' },
        // Add more token times as needed
    ];

    const lawyerTimeOfWork = [
        { day: 'Monday', time: '09:00 AM - 05:00 PM' },
        { day: 'Tuesday', time: '10:00 AM - 06:00 PM' },
        { day: 'Wednesday', time: '08:00 AM - 04:00 PM' },
        // Add more time of work entries as needed
    ];

    const availableSlots = [
        'January 1, 2024 09:00:00',
        'January 1, 2024 10:00:00',
        'January 2, 2024 11:00:00',
        // Add more slots as needed
    ];

    const [selectedSlot, setSelectedSlot] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [selectedDayAndTime, setSelectedDayAndTime] = useState('');

    const handleSlotChange = (e) => {
        setSelectedSlot(e.target.value);
    };

    const handleNomChange = (e) => {
        setNom(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDayAndTimeChange = (e) => {
        setSelectedDayAndTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected slot: ${selectedSlot}`);
        setSubmitted(true);
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        console.log(`Appointment details: Nom - ${nom}, Email - ${email}, Day and Time - ${selectedDayAndTime}`);
    };

    return (
        <section className="appointment-page">
            <NavBar />
            <div className="appointment-grid">
                <div className="appointment-table">
                    <h2 className="section-title">Rendez-vous</h2>

                    {/* Token Times Table */}
                    <div className="table-container">
                        <h3>Token Times for the Lawyer</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Hour</th>
                                    <th>Client Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lawyerTokenTimes.map((token, index) => (
                                    <tr key={index}>
                                        <td>{token.date}</td>
                                        <td>{token.hour}</td>
                                        <td>{token.clientName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Time of Work Table */}
                    <div className="table-container">
                        <h3>Time of Work for the Lawyer</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lawyerTimeOfWork.map((timeOfWork, index) => (
                                    <tr key={index}>
                                        <td>{timeOfWork.day}</td>
                                        <td>{timeOfWork.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Appointment Form */}
                <div className="form-container">
                    <h3>Make an Appointment</h3>
                    <form onSubmit={handleAppointmentSubmit} className="appointment-form">
                        <label>Nom:</label>
                        <input type="text" value={nom} onChange={handleNomChange} required />

                        <label>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} required />

                        <label>Day and Time:</label>
                        <select value={selectedDayAndTime} onChange={handleDayAndTimeChange} className="time-slot-dropdown" required>
                            <option value="">Select a day and time</option>
                            {availableSlots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {new Date(slot).toLocaleString()}
                                </option>
                            ))}
                        </select>

                        <button type="submit" className="submit-button">Réserver</button>
                    </form>

                    {/* Display confirmation message after submission */}
                    {submitted && (
                        <div className="confirmation-message">
                            Vous avez réservé un rendez-vous pour : {new Date(selectedSlot).toLocaleString()}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default AppointmentSection;
