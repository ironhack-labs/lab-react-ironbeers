import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Beers from './components/Beers';
import HomePage from './components/HomePage';
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
  callbackToFetchBeers();
  }, []);

  const  callbackToFetchBeers = () =>{
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      setBeers(response.data);
    })
    .catch((error) => console.log('error getting beers', error));

  }
    

  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/beers" element={<Beers beers={beers}  />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new" element={<NewBeer />} />
      <Route path='/beers/:beerId' element={<BeerDetails />} />
      </Routes>

    </div>
  );
}

export default App;
