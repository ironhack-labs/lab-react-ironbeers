import Homepage from './components/Homepage';
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Header from "./components/Header";
import BeerDetails from './components/BeerDetails';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';


function App() {

  const [beerList, setBeerList] = useState([])

  useEffect(() => {
    getBeerFromApi()
  }, []);

  const getBeerFromApi =() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeerList(response.data);
      })
      .catch((error) => {
        console.log('Error getting beer list from API',error);
      });
  }

  // creating new beer
  const createNewBeer = (newBeerObj) => {
    setBeerList( (prevBeers) => {
      const newListing = [newBeerObj, ...prevBeers];
      return newListing;
    });
  }

  return (
    <div className="App">

      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<Header />} />
          <Route path="/beers" element={<Beers beerList={beerList} />} />
          <Route path="/beers/:beerId" element={<BeerDetails beerList={beerList} />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer createCallback={createNewBeer} />} />

          <Route path="*" element={<h1>404: Sorry, this route does not exist.</h1>} />
      </Routes>


    </div>
  );
}


export default App;
