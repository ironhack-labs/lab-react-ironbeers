import './App.css';
import HomePage from './components/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import BeerList from './components/BeerList/BeerList'
import axios from 'axios';
import BeerDetails from './components/BeerDetails/BeerDetails';

// info para usar react-router-dom https://v5.reactrouter.com/web/guides/quick-start
//No se si es buena practica pero he puesto Navbar fuera de routes de esta manera siempre sera visible, presupongo que
//con el footer pasara igual

function App() {


 
  const [beers, setBeers] = useState(null)
  
  // seguidos los pasos de la clase anterior de Pablo

  const fetchBeers = useCallback(() => {
      return axios.get("https://ih-beers-api2.herokuapp.com/beers")
  }, [])

  useEffect(() => {
      fetchBeers()
      .then(response => setBeers(response.data))
  }, [fetchBeers])

  



  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/beers" element={ <BeerList beers={ beers }/> }></Route>
        <Route path="/beers/:beerId" element={ <BeerDetails beers={ beers }/> }></Route>
        <Route PAT></Route>
      </Routes>
    </div>
  );
}

export default App;
