import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './rendezvous.css';

const AppointmentSection = () => {
    const lawyerTokenTimes = [
        { date: 'January 1, 2024', hour: '09:00:00', clientFirstName: 'Client A First', clientLastName: 'Client A Last' },
        { date: 'January 1, 2024', hour: '10:00:00', clientFirstName: 'Client B First', clientLastName: 'Client B Last' },
        { date: 'January 2, 2024', hour: '11:00:00', clientFirstName: 'Client C First', clientLastName: 'Client C Last' },
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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleSlotChange = (e) => {
        const selectedSlot = e.target.value;
        setSelectedSlot(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected slot: ${selectedSlot}`);
        setSubmitted(true);
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        console.log(`Appointment details: 
            First Name - ${firstName}, 
            Last Name - ${lastName}, 
            Email - ${email}, 
            Day - ${selectedDay}, 
            Time - ${selectedTime}`);
    };

    return (
        <section className="appointment-page">
          <NavBar />
          <h2 className="section-title-rdv">Prennez votre Rendez-vous ici</h2>
          <div className="appointment-grid">
            <div className="appointment-table">
              
    
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
    
              <div className="table-container">
                <h3>Token Times for the Lawyer</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Hour</th>
                      <th>Client First Name</th>
                      <th>Client Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lawyerTokenTimes.map((token, index) => (
                      <tr key={index}>
                        <td>{token.date}</td>
                        <td>{token.hour}</td>
                        <td>{token.clientFirstName}</td>
                        <td>{token.clientLastName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    
            <div className="form-container">
              <h3>Make an Appointment</h3>
              <form onSubmit={handleAppointmentSubmit} className="appointment-form">
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={handleFirstNameChange} required />
    
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={handleLastNameChange} required />
    
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} required />
    
                <label>Day:</label>
                <select value={selectedDay} onChange={handleDayChange} required>
                  <option value="">Select a day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                </select>
    
                <label>Time:</label>
                <select value={selectedTime} onChange={handleTimeChange} required>
                  <option value="">Select a time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
    
                <button type="submit" className="submit-button">Réserver</button>
              </form>
    
            </div>
          </div>
    
          <Footer />
        </section>
      );
    };
    
    export default AppointmentSection;