import React, { useState } from 'react';

const ReceiptUpload = ({ onPointsEarned }: { onPointsEarned: (points: number) => void }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) {
      const mockPoints = Math.floor(Math.random() * 100) + 1;
      onPointsEarned(mockPoints);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload Receipt</button>
    </div>
  );
};

export default ReceiptUpload;
