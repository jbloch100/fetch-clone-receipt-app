import React from 'react';
import './styles/global.css';
import Dashboard from './pages/Dashboard';
import { PointsProvider } from './context/PointsContext';

function App() {
  return (
    <PointsProvider>
      <Dashboard />
    </PointsProvider>
  );
}

export default App;
