import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/donors').then(res => setDonors(res.data));
  }, []);

  return (
    <div>
      <h2>Available Donors</h2>
      <ul>
        {donors.map((d, i) => (
          <li key={i}>{d.name} - {d.bloodType} - {d.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
