import axios from 'axios';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import HomePage from './components/HomePage';
import NewBeer from './components/NewBeer';
import { useState, useEffect } from 'react';

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch(e => console.log("error getting beers from API", e));
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeerList beers={beers} />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:beerId' element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
