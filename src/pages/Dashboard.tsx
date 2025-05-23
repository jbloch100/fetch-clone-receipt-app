import React from 'react';
import ReceiptUpload from '../components/ReceiptUpload';
import { usePoints } from '../context/PointsContext';

function Dashboard() {
  const { points, addPoints } = usePoints();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Receipt Dashboard</h1>
      <p>Upload a receipt to earn points.</p>
      <ReceiptUpload onPointsEarned={addPoints} />
      <h2>Total Points: {points}</h2>
    </div>
  );
}

export default Dashboard;
