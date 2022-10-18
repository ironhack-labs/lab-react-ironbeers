import "./App.css";
import { Routes, Route } from "react-router-dom";

import BeersList from "./pages/BeersList";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NewBeer from "./pages/NewBeer";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import { useState, useEffect } from "react";
import axios from "axios";


let beersData = [];

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      setBeers(result.data);
    });
  }, []);

  // console.log(beers);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList beers={beers} />} />

        <Route path="/random-beer" element={<RandomBeer />} />

        <Route
          path="/single-beer/:beerId"
          element={<SingleBeer beer={beers} />}
        />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;