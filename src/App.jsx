import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComparisonPage from './pages/ComparisonPage';
import './global.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B1F]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compare" element={<ComparisonPage />} />
      </Routes>
    </div>
  );
}

export default App;
