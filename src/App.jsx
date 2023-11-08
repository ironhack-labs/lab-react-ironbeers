import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages//AllBeersPage';
import AddBeerPage from './pages/AddBeerPage.jsx';
import RandomBeerPage from './pages/RandomBeerPage';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/allbeers" element={<AllBeersPage />} />
        <Route exact path="/addbeer" element={<AddBeerPage />} />
        <Route exact path="/randombeer" element={<RandomBeerPage />} />
      </Routes>
    </div>

  );
};

export default App;
