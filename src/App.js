import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Beers from './pages/beers';
import NewBeer from './pages/new-beer';
import RandomBeer from './pages/random-beer';
import BeerId from './pages/beerId';
import axios from 'axios';



function App() {
const [beers, setBeers]= useState([]);
useEffect(() => {
  axios
  .get("https://ih-beers-api2.herokuapp.com/beers")
  .then((response) => {
    setBeers(response.data);
  })
}, [])
console.log(beers)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route path="/" element={<HomePage />}/>
     <Route path="/beers" element={<Beers beers={beers}/>}/>
     <Route path="/new-beer" element={<NewBeer />}/>
     <Route path="/random-beer" element={<RandomBeer  beers={beers} />}/>
     <Route path="/beers/:beerId" element={<BeerId  beers={beers}/>}/>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
