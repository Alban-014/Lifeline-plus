import React, { useState } from 'react';
import axios from 'axios';

const RegisterDonor = () => {
  const [form, setForm] = useState({
    name: '', bloodType: '', location: '', lastDonationDate: '', phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    await axios.post('http://localhost:5000/donor', form);
    alert('Donor Registered!');
  };

  return (
    <div>
      <h2>Register as Donor</h2>
      {['name', 'bloodType', 'location', 'lastDonationDate', 'phone'].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field}
          onChange={handleChange}
          style={{ margin: '5px', padding: '5px' }}
        /><br />
      ))}
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default RegisterDonor;
