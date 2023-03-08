
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'react';
import { Router, Route, Routes, Fragment } from 'react-router-dom';
import Beers from './pages/Beers';


function App() {



  return (
    <div className="App">
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<><NavBar /> <Beers /></>} />
        </Routes>


      </div>
    </div>
  );
}

export default App;
