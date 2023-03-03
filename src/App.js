import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import BeerList from "./pages/BeerList.jsx";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Details from "./pages/Details";

function App() {
  const [beers, setBeers] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    setBeers(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={"/beers"} element={<BeerList beers={beers} />} />
        <Route path={"/random-beer"} element={<RandomBeer />} />
        <Route path={"/new-beer"} element={<NewBeer />} />
        <Route path={"/"} element={<HomePage />} />
        <Route path="/:beerId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
