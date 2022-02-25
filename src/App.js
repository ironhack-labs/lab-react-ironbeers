import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import BeersPage from "./pages/Beers";
import BeerDetails from "./pages/BeerDetails";
import axios from "axios";
import BeerRandom from "./pages/BeerRandom";
import AddBeerPage from "./pages/AddBeerPage";

function App() {
  const [beers, setBeers] = useState([]);
  let api = "https://ih-beers-api2.herokuapp.com/beers";
  useEffect(() => {
    axios.get(api).then((response) => {
      //console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  if (!beers) {
    return <p className="col-7"> Loading... </p>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"beers"} element={<BeersPage />} />
        <Route path={"/:_id"} element={<BeerDetails BeerDetails={beers} />} />
        <Route path={"random-beer"} element={<BeerRandom />} />
        <Route path={"new-beer"} element={<AddBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
