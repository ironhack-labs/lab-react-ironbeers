import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import RandomBeer from "./components/RandomBeer";
import BeersList from "./components/BeersList";
import BeerDetails from "./components/BeerDetails";
import CreateBeer from "./components/CreateBeer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers" element={<BeersList beers={beers} />} />
        <Route path="/beer/:id" element={<BeerDetails beers={beers} />} />
        <Route path="/create-beer" element={<CreateBeer />} />
      </Routes>
    </div>
  );
}

export default App;
