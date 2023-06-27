import './App.css';
import { Routes, Route } from 'react-router-dom';

import CreateBeer from './components/CreateBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import BeersList from './components/BeersList';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/beers' element={<BeersList />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<CreateBeer />} />
      </Routes>
    </div>
  );
}

export default App;
