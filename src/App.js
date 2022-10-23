import './App.css';
import axios from 'axios';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import HomePage from './components/HomePage';
import BeerList from './components/BeerList';
import NewBeer from './components/NewBeer';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [beers, setBeers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        setBeers(response.data);
      })
      .catch(e => console.log("error fetching beers from API", e));
  }

  const createBeer = (beerDetails) => {
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerDetails)
    .then(response => {
      setBeers([response.data, ...beers]);
      navigate("/beers");
    })
    .catch(e => console.log("error creating beer in API", e));
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeerList beers={beers} />} />
        <Route path='/beers/:beerId' element={<BeerDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer callbackToCreate={createBeer} />} />
      </Routes>
    </div>
  );
}

export default App;
