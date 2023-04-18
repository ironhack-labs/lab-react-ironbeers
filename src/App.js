import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
