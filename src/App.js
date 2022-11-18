import './App.css';
import { Routes, Route } from 'react-router-dom'
import Beers from './components/Beers'
import Home from './components/Home'
import BeerDetails from './components/BeerDetails'
import NewBeer from './components/Newbeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/:BeerDetId' element={<BeerDetails />} />
        <Route path='/beers/NewBeer' element={<NewBeer />} />
        <Route path='/beers/RandomBeer' element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
