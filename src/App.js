import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';

function App() {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        setBeersList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage beers={beersList} />} />
        <Route
          path='/beers/:beerName'
          element={<BeerDetailsPage beers={beersList} />}
        />
        <Route path='/new-beer' element={<NewBeerPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
