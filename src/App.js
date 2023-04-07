import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import axios
import axios from 'axios';

// component imports
import NavBar from './components/NavBar';
import Home from './components/Home';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';

function App() {

  const [beers, setBeers] = useState(null);

  // get the list of beers from the API and store in our stateful variable beers
  const loadBeers = () => {
    axios.get(process.env.REACT_APP_APIURL)
      .then( response => {
        setBeers(response.data);
      })
      .catch( e => {
        console.error('Error getting the list of beers:', e)
      });
  }

  // invoke the function
  useEffect(() => {
    loadBeers();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/beers' element={ beers ? <BeersList beers={beers} /> : <div className="spinner-border text-info mt-5"></div> } />
        <Route path='/random-beer' element={ <RandomBeer /> } />
        <Route path='/new-beer' element={ <AddBeer callbackToLoadBeers={loadBeers} /> } />
        <Route path='/beers/:beerId' element={ beers ? <BeerDetails beers={beers} /> : <div className="spinner-border text-info mt-5"></div> } />
      </Routes>
    </div>
  );
}

export default App;
