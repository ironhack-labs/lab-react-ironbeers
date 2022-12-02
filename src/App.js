import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";

import axios from "axios";
import { useEffect, useState } from 'react';
import RandomBeer from './pages/RandomBeer';


function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      setBeers(response.data);
    })
  }, []);

  return (
    <BrowserRouter>
    <HomePage/>
      <Routes>
      <Route path="/" element={HomePage} />
      <Route path="/beers" element={<Beers beers={beers} />} />
      <Route path="/RandomBeer" element={<RandomBeer/>}/>
      <Route path="/NewBeer" element={<NewBeer/>}/>
      </Routes>
    </BrowserRouter>
  ); 
};

export default App;
