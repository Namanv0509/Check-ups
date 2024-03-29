import React from 'react';
import './App.css'; // Import your global CSS file if needed
import CheckUps from './CheckUps'; // Import your CheckUps component

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Check Ups App</h1>
      <CheckUps />
    </div>
  );
};

export default App;
