import './App.css';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/New-beer';
import { useState, useEffect } from "react";
import axios from "axios";

import { Routes, Route } from "react-router-dom";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beers) => {
        setBeers(beers.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers beers={beers} />} />
        <Route path="/beers/:beerId" element={<SingleBeer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>

    </div>
  );
}

export default App;
