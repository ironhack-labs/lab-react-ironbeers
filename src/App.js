import { Route, Routes } from 'react-router';
import Home from './views/Home/Home';
import Navbar from './components/misc/Navbar/Navbar';
import BeerList from './components/misc/BeerList/BeerList';
import RandomBeer from './views/RandomBeer/RandomBeer';
import NewBeer from './views/NewBeer/NewBeer';
import SingleBeer from './views/SingleBeer/SingleBeer';
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [beers, setBeers] = useState(null)
  const [randomBeer, setRandomBeer] = useState(null)

  const fetchBeers = useCallback(() => {
      return axios.get("https://ih-beers-api2.herokuapp.com/beers")
  },[])

  useEffect(() => {
      fetchBeers()
      .then(response => setBeers(response.data))
  }, [fetchBeers])

  const fetchRandomBeer = useCallback(() => {
    return axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
  },[])

  useEffect(() => {
    fetchRandomBeer()
    .then(response => setRandomBeer(response.data))
  }, [fetchRandomBeer])





  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/beers' element={<BeerList beers={beers}></BeerList>}></Route>
        <Route path='/beers/:id' element={<SingleBeer beers={beers}></SingleBeer>}></Route>
        <Route path='/random-beer' element={<RandomBeer randomBeer={randomBeer}></RandomBeer>}></Route>
        <Route path='/new-beer' element={<NewBeer></NewBeer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
