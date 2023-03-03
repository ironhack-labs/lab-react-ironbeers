import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerId from "./components/BeerId";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { ApiContext } from "./contexts/api.context";

function App() {
  const [beers, setBeers] = useState([]);
  const { apiUrl } = useContext(ApiContext);

  const getBeers = async () => {
    try {
      let response = await axios.get(apiUrl);
      setBeers(response.data);
      /* console.log(response.data); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/randomBeer" element={<RandomBeer />} />
        <Route path="/newBeer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerId beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
