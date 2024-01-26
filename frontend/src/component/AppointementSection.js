import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./rendezvous.css";
import { useParams } from "react-router-dom";

const AppointmentSection = () => {
  const { idlawyer } = useParams();
  const [rendezvous, setRendezvous] = useState([]);

  useEffect(() => {
    getRendezvous();
  }, [idlawyer]);

  const getRendezvous = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/get-rendezvous-by-lawyer/${idlawyer}/`
      );
      const data = await response.json();
      setRendezvous(data);
    } catch (error) {
      console.error("Error fetching rendezvous:", error);
    }
  };

  const lawyerTimeOfWork = [
    { day: "Dimanche", time: "09:00 - 17:00" },
    { day: "Lundi", time: "09:00 - 17:00" },
    { day: "Mardi", time: "10:00 - 18:00" },
    { day: "Mercredi", time: "08:00 - 16:00" },
    { day: "Jeudi", time: "08:00 - 16:00" },
    // Ajoutez plus d'entrées de temps de travail au besoin
  ];

  const availableSlots = [
    "1 janvier 2024 09:00:00",
    "1 janvier 2024 10:00:00",
    "2 janvier 2024 11:00:00",
    // Ajoutez plus de créneaux au besoin
  ];

  const [selectedSlot, setSelectedSlot] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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

            Nom - ${lastName}, 
            Email - ${email}, 
            Jour - ${selectedDay}, 
            Heure - ${selectedTime}`);
  };

  return (
    <section className="appointment-page">
      <NavBar />
      <h2 className="section-title-rdv">Prenez votre rendez-vous ici</h2>
      <div className="appointment-grid">
        <div className="appointment-table">
          <div className="table-container">
            <h3>Heures de travail pour l'avocat</h3>
            <table>
              <thead>
                <tr>
                  <th>Jour</th>
                  <th>Heure</th>
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
            <h3>Horaires de jetons pour l'avocat</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Heure</th>
                  <th>Client Concerné</th>
                  <th>Motif du rendez-vous</th>
                </tr>
              </thead>
              <tbody>
                {rendezvous.map((token, index) => (
                  <tr key={index}>
                    <td>{token.dateRDV}</td>
                    <td>{token.heureRDV}</td>
                    <td>{token.clientName}</td>
                    <td>Consultation</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-container">
          <h3>Prendre un rendez-vous</h3>
          <form onSubmit={handleAppointmentSubmit} className="appointment-form">
            <label>Prénom :</label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />

            <label>Nom :</label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />

            <label>Email :</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label>Jour :</label>
            <select value={selectedDay} onChange={handleDayChange} required>
              <option value="">Sélectionnez un jour</option>
              <option value="Lundi">Dimanche</option>
              <option value="Lundi">Lundi</option>
              <option value="Mardi">Mardi</option>
              <option value="Mercredi">Mercredi</option>
              <option value="Mercredi">Jeudi</option>
            </select>

            <label>Heure :</label>
            <select value={selectedTime} onChange={handleTimeChange} required>
              <option value="">Sélectionnez une heure</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="13:00 AM">13:00 AM</option>
              <option value="14:00 AM">14:00 AM</option>
              <option value="15:00 AM">15:00 AM</option>
            </select>

            <button type="submit" className="submit-button">
              Réserver
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AppointmentSection;
