import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Faymaco from './pages/Faymaco';
import CGU from './pages/CGU';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-peelo-cream dark:bg-peelo-dark">
        <Routes>
          <Route path="/" element={<Faymaco />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
