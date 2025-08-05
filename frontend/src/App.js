import React from 'react';
import RegisterDonor from './RegisterDonor';
import DonorList from './DonorList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>LifeLine+</h1>
      <RegisterDonor />
      <hr />
      <DonorList />
    </div>
  );
}

export default App;
