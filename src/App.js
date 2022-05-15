import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetails from "./components/BeerDetails";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")

      .then((response) => {
        console.log(19, response.data);
        setBeers(response.data);
      })
      .catch((e) => console.log("error getting the beers from API", e));
  }, []);

  console.log(25, beers);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers props={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails props={beers} />} />
      </Routes>
    </div>
  );
}
export default App;
