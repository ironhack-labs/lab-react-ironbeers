import logo from './logo.svg';
import './App.css';

import HomePage from "./components/HomePage";
import Header from "./components/Header";      
import AllBeers from "./components/AllBeers";       
import RandomBeer from "./components/RandomBeer";     
import NewBeer from "./components/NewBeer";   

import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';    


function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/allbeers" element={<AllBeers beers={beers} />} />
          <Route path="/randombeer" element={<RandomBeer />} />
          <Route path="/newbeer" element={<NewBeer />} />
        </Routes>  

    </div>
  );
}

export default App;
