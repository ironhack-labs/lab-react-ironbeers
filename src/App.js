import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./components/HomePage";
import BeersList from "./components/BeersList";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import BeerDetails from "./components/BeerDetails";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setBeers(result.data);
      })
      .catch();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer beers={beers} />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
