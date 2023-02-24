import "./App.css";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  const [beers, setBeers] = React.useState([]);
  const [randomBeer, setRandomBeer] = React.useState([]);

  const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

  React.useEffect(() => {
    axios.get(apiURL).then((response) => setBeers(response.data));
  }, []);

  React.useEffect(() => {
    axios.get(`${apiURL}/random`).then((response) => setRandomBeer(response.data));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/beers"
          element={<Beers beers={beers} />}
        />
        <Route
          path="/random"
          element={<RandomBeer beer={randomBeer} />}
        />
        <Route
          path="/new"
          element={<NewBeer />}
        />
      </Routes>
    </div>
  );
}

export default App;
