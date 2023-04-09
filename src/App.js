import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import BeersList from './components/BeersList';
import NewBeer from './components/NewBeer';
import BeersDetail from './components/BeersDetail';
import { useState, useEffect } from 'react';
import beersService from './services/beers.service'

function App() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    beersService.list()
      .then((beersFromApi) => {
        setBeers(beersFromApi)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList beers={beers} />} />
        <Route path="/beers/:id" element={<BeersDetail />} />
        <Route path="/random-beer" element={<BeersDetail />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </>
  );
}

export default App;
