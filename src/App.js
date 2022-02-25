
//App.js

import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/pages/ListBeers" element={<ListBeers />} />

        <Route path="/beers/:beerId" element={<SingleBeer />} />

        <Route path="/pages/RandomBeer" element={<RandomBeer />} />

        <Route path="/pages/NewBeer" element={<NewBeer />} />

      </Routes>

    </div>
  );
}

export default App;
