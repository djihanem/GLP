import React, { useState } from 'react';

const LawyerList = () => {
  const [lawyers, setLawyers] = useState([
    { id: 1, name: 'John', prenom: 'Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Alice', prenom: 'Smith', email: 'alice.smith@example.com' },
    // Add more lawyers as needed
  ]);

  const handleDelete = (id) => {
    // Filter out the lawyer with the specified id
    const updatedLawyers = lawyers.filter((lawyer) => lawyer.id !== id);
    setLawyers(updatedLawyers);
  };

  return (
    <div className='Admin'>
        <h1>Admin Dashboard</h1>
      {lawyers.map((lawyer) => (
        <div key={lawyer.id} className="lawyer-card">
          <div>
            <strong>Name:</strong> {lawyer.name}
          </div>
          <div>
            <strong>Prenom:</strong> {lawyer.prenom}
          </div>
          <div>
            <strong>Email:</strong> {lawyer.email}
          </div>
          <button onClick={() => handleDelete(lawyer.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default LawyerList;
