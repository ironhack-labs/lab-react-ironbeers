import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import Navbar from "./components/Navbar";

function App() {
  
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

  const [allBeers, setAllBeers] = useState([])
  
  useEffect(() => {
    axios.get(API_URL)
    .then((response) => {
        // console.log(response.data)
        setAllBeers(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
}, [])
  
  const getRandomBeerId = () => {
    
    const randomIndex = Math.floor(Math.random() * allBeers.length)
    
    return allBeers[randomIndex]._id
  }
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeersPage />}/>
        <Route path="/random-beer" element={<RandomBeersPage randomBeerId={getRandomBeerId}/>}/>
        <Route path="/new-beer" element={<AddBeerPage />}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
