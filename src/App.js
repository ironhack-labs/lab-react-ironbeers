import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom'
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';
import axios from 'axios';
import { useState, useEffect } from 'react'
function App() {
  const [beers, setBeers] = useState([])


  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeers(response.data)
      })
      .catch(err => console.log(err))

    return () => {

    }
  }, [])



  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersList beers={beers} setBeers={setBeers} />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:beerId' element={<BeerDetails beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
