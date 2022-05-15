import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import { useEffect, useState } from 'react/cjs/react.production.min';
import CreateBeer from './components/CreateBeer';

function App() {

  const [beers, setBeer] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        //console.log(response.data);
        setBeer(response.data);
      })
      .catch((e) => console.log("error fetchin array of beers", e));
  }, []);


  return (
<div className='App'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<><Header /> <Beers/> </> } />
      <Route path="/random-beer" element={<Header />} />
      <Route path="/new-beer" element={<Header />} />
      <Route path="/beers/1" element={<><Header /> <BeerDetails/> beerArr={beers}</> } />
      <Route path="/create" element={<><Header /> <CreateBeer/> </> } />
      <button>Add beer</button>
    </Routes>

    </div>
  );
}

export default App;
