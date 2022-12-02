import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './HomePage';
import BeersList from './BeersList';
import axios from "axios";
import { useState, useEffect } from "react";
import BeerCard from './BeerCard';
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data)
      });
  }, []);


  return (
    <div className="App">

      <Routes>
        <Route path="/"
          element={<HomePage />} />
        <Route path="/list"
          element={<BeersList beers={beers} />} />
        <Route path="/:id"
          element={<BeerCard beers={beers} />} />
        <Route path="/random-beer"
          element={<RandomBeer />} />
        <Route path="/new-beer"
          element={<NewBeer />} />
      </Routes>

    </div>
  );
}

export default App;
