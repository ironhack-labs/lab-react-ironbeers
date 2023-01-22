import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route, Link } from 'react-router-dom'
import Beers from './pages/Beers'
import BeerDetails from './pages/BeerDetails'
import HomeCard from './components/HomeCard';

import randomBeer from './assets/random-beer.png'
import newBeer from './assets/new-beer.png'
import Navbar from './components/Navbar';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<CreateBeer />} />
        <Route path="/beer/:id" element={<BeerDetails />} />

      </Routes>



    </div>
  );
}

export default App;
