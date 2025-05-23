import React, { createContext, useContext, useState } from 'react';

const PointsContext = createContext<{ points: number; addPoints: (p: number) => void }>({
  points: 0,
  addPoints: () => {},
});

export const PointsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState(0);
  const addPoints = (p: number) => setPoints(prev => prev + p);

  return (
    <PointsContext.Provider value={{ points, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => useContext(PointsContext);
