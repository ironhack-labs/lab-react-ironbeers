import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom"; 
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import axios from 'axios';
import { useEffect, useState } from 'react';
import BeerDetails from './components/BeerDetails';

function App() {
const [beers, setBeers] = useState([]);
const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

useEffect(() => {
  //get beers from API
  axios.get(apiURL).then((response) => {
    setBeers(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
}, []);

  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/beers/:beerId" element={<BeerDetails beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<RandomBeer />} />

        {/* <Route path="*" element={ <ErrorPage /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
