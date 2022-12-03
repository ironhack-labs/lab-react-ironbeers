import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import NewBeer from "./pages/NewBeerPage";
import BeersPage from "./pages/BeersPage";
import RandomBeer from "./pages/RandomBeerPage";
import BeerDetails from "./components/BeerDetails";

import axios from "axios";

const App = () => {
  const [beers, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeer(response.data);
      });
  }, []);
  console.log(beers)

  return (
    <BrowserRouter>
    <Home/>
      <Routes>
      <Route path="/" element={Home} />
      <Route path="/beers" element={<BeersPage beers={beers} />} /> 
      <Route path="/beers/:id" element={<BeerDetails beers={beers} />} />
        {/* <Route path="/add" element={<AddBeerPage />} />
        <Route path="/random" element={<RandomBeerPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;