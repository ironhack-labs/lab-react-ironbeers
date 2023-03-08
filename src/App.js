
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
// import { useState, useEffect } from 'react';
// import axios from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Beers from './pages/Beers';


function App() {



  return (
    <div className="App">
      <div>
        <NavBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
