import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import DetailBeer from './components/DetailBeer';
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer';

function App() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBeers = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers`
      );
      setBeers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);



  return (
    <div className="App">
      {loading && <p>Loading...</p> }
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers beers={beers}/>}/>
        <Route path="/beers/:beerId" element={<DetailBeer />} />
        <Route path="/randombeer" element={<RandomBeer />}/>
        <Route path="/newbeer" element={<NewBeer />}/>
      </Routes>
    </div>
  );
}


export default App;
