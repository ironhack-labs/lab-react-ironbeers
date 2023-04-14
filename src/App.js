import { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import { getBeers } from './services/beersService';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import BeerDetail from './components/BeerDetail/BeerDetail';
import RandomBeer from './components/RandomBeer/RandomBeer';

function App() {

  const { pathname } = useLocation();

  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    getBeers()
      .then(beers => setBeersData(beers));
  });

  return (
    <div className="App">
      {pathname !== "/" && pathname !== "/home" && <Header />}
      <div className="container">
        <Routes>
          <Route path="/home?" element={<Home />} />
          <Route path="/beers" element={<BeersList beersData={beersData} />} />
          <Route path="/beers/:id" element={<BeerDetail beersData={beersData} />} />
          <Route path="/random-beer" element={<RandomBeer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
