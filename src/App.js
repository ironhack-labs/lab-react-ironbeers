import './App.css';
import HomePage from './components/IndexPage/IndexPage';
import BeersList from './components/BeersList/BeersList';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import BeerDetails from './components/BeerDetails/BeerDetails';

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />

    </Routes>

    </div>
  );
}

export default App;
