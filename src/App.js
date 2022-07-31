import { Routes, Route } from 'react-router-dom';

import './App.css';

import Beers from "./components/Beers"
import BeerDetails from "./components/BeerDetails"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/beers' element={<Beers />}></Route>
        <Route path='/beers/:beerId' element={<BeerDetails />}></Route>
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
