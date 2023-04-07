
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
