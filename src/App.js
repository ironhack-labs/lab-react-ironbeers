import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';


function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);


  const getContributorName = (contributor) => {
    const startIndex = contributor.indexOf("<");
    if (startIndex !== -1) {
      return contributor.slice(0, startIndex).trim();
    }
    return contributor;
  };

  

  return (
    // ...
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<AllBeers beers={beers} callbackToName={getContributorName} />} />
      <Route path="/beers/:beerId" element={<BeerDetails beers={beers} callbackToName={getContributorName} />} />

      <Route path="/random-beer" element={<RandomBeer callbackToName={getContributorName} />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes>
    // ...
  );
}

export default App;
