import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

//import BeerDetails from './components/BeerDetails';
import BeersList from './components/BeersList';
import CreateBeer from './components/CreateBeer';
import HomePage from './components/HomePage';
import RandomBeer from './components/RandomBeer';


function App() {

  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      setBeers(response.data)
    })
    .catch(error => {
      console.log('error getting beers from the API', error)
    })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersList />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<CreateBeer />} />
    {/*    <Route path='/beers/:id' element={<BeerDetails beers={beers} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
