import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AllBeers from "./components/AllBeers";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import axios from 'axios';

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  const [fetching, setFetching] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL)
      .then((response) => {
        setBeers(response.data);
        setFetching(false);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* {fetching && <p>Loading ...</p>} */}
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route 
          path="/beers"
          element={<AllBeers beers={beers}/>}
        />
        <Route 
          path="/beers/:beerId"
          element={<BeerDetails beers={beers}/>}
        />
        <Route 
          path="/random-beer"
          element={<RandomBeer />}
        />
        <Route 
          path="/new-beer"
          element={<NewBeer />}
        />
      </Routes>
    </div>
  )
}

export default App;