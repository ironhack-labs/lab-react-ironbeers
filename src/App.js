import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import HomePage from './components/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import ListBeers from './components/ListBeers/ListBeers';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import beerService from './services/beers.service';
import SingleBeer from './components/SingleBeer/SingleBeer';


function App() {



  const [beers, setBeers] = useState([])

  useEffect(() => {
    loadBeers()
  }, [])

  const loadBeers = () => {
    beerService
      .getAllBeers()
      .then(({ data }) => setBeers(data))
      .catch(err => console.log(err))
  }



  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers beersArr={beers} />} />
        <Route path="/single-beer/:id" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />

      </Routes>
    </div>
  );
}

export default App;
