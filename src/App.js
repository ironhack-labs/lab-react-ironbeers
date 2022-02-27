import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import Navbar from "./components/Navbar";
import RandomBeer from "./components/RandomBeer";
import HomePage from "./components/HomePage";
import SingleBeer from "./components/SingleBeer";
import NewBeer from "./components/NewBeer";
import {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react'

function App() {
  const [beers, setBeers] = useState([]);

  const url = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setBeers(response.data);
        
      })
      .catch();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers  data={beers}/>} />
        <Route path="/beers/:beerId" element={<SingleBeer data={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
