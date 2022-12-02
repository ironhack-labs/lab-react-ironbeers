// src/App.js
import "./App.css";
import BeerLists from "./components/BeerLists";
import RandomBeer from "./components/RandomBeer";
//import CreateNewBeer from "./components/CreateNewBeer";
import SingleBeer from "./components/SingleBeer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";

function App() {
  const [beerList, setBeerList] = useState([]);
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeerList(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeerLists beerList={beerList} />} />
        <Route path="/beers/:_id" element={<SingleBeer beer={beerList} />} />

        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </>
  );
}
export default App;
