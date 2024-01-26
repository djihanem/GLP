import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 
import NavBar from './NavBar';
import Footer from './Footer';
import './rendezvous.css';

const AppointmentSection = () => {
    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        console.log('Changing language to:', lng);
        i18n.changeLanguage(lng);
      };


    const lawyerTokenTimes = [
        { date: '1 janvier 2024', hour: '09:00:00', clientFirstName: 'Client A Prénom', clientLastName: 'Client A Nom' },
        { date: '1 janvier 2024', hour: '10:00:00', clientFirstName: 'Client B Prénom', clientLastName: 'Client B Nom' },
        { date: '2 janvier 2024', hour: '11:00:00', clientFirstName: 'Client C Prénom', clientLastName: 'Client C Nom' },
        // Ajoutez plus de moments de jeton au besoin
    ];

    const lawyerTimeOfWork = [
        { day: 'Lundi', time: '09:00 - 17:00' },
        { day: 'Mardi', time: '10:00 - 18:00' },
        { day: 'Mercredi', time: '08:00 - 16:00' },
        // Ajoutez plus d'entrées de temps de travail au besoin
    ];

    const availableSlots = [
        '1 janvier 2024 09:00:00',
        '1 janvier 2024 10:00:00',
        '2 janvier 2024 11:00:00',
        // Ajoutez plus de créneaux au besoin
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
        console.log(`Créneau sélectionné : ${selectedSlot}`);
        setSubmitted(true);
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        console.log(`Détails du rendez-vous :
            Prénom - ${firstName}, 
            Nom - ${lastName}, 
            Email - ${email}, 
            Jour - ${selectedDay}, 
            Heure - ${selectedTime}`);
    };

    return (
        <section className="appointment-page">
            <NavBar />

            <button onClick={() => changeLanguage('fr')} className='translate'>French</button>
            <button onClick={() => changeLanguage('ar')} className='translate'>العربية</button>

            <h2 className="section-title-rdv">{t('appointment.title')}</h2>
            <div className="appointment-grid">
                <div className="appointment-table">


                    <div className="table-container">
                        <h3>{t('appointment.table.workHours')}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('appointment.table.date')}</th>
                                    <th>{t('appointment.table.time')}</th>
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
                        <h3>{t('appointment.table.tokenHours')}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('appointment.table.date')}</th>
                                    <th>{t('appointment.table.time')}</th>
                                    <th>{t('appointment.table.clientFirstName')}</th>
                                    <th>{t('appointment.table.clientLastName')}</th>
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
          <h3>{t('appointment.form.title')}</h3>
          <form onSubmit={handleAppointmentSubmit} className="appointment-form">
            <label>{t('appointment.form.firstName')}:</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />

            <label>{t('appointment.form.lastName')}:</label>
            <input type="text" value={lastName} onChange={handleLastNameChange} required />

            <label>{t('appointment.form.email')}:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />

            <label>{t('appointment.form.day')}:</label>
            <select value={selectedDay} onChange={handleDayChange} required>
              <option value="">{t('appointment.form.selectDay')}</option>
              <option value="Lundi">{t('days.monday')}</option>
              <option value="Mardi">{t('days.tuesday')}</option>
              <option value="Mercredi">{t('days.wednesday')}</option>
            </select>

            <label>{t('appointment.form.time')}:</label>
            <select value={selectedTime} onChange={handleTimeChange} required>
              <option value="">{t('appointment.form.selectTime')}</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
            </select>

            <button type="submit" className="submit-button">{t('appointment.form.book')}</button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AppointmentSection;
