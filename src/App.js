import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import NewBeerPage from "./pages/NewBeerPage";
import BeersPage from "./pages/BeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetails from "./components/BeerDetails";

import axios from "axios";

function App ()  {
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
    
    <>
     
     <Routes>
      <Route path="/" element={<Home home={Home} />} />
      <Route path="/beers" element={<BeersPage beers={beers} />} /> 
      <Route path="/beers/:id" element={<BeerDetails beers={beers} />} />
      <Route path="/random-beer" element={<RandomBeerPage/>}/>
      <Route path="/new-beer" element={<NewBeerPage/>}/>
      </Routes>
     
  
  </>
  );
};

export default App;