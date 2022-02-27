import './App.css';
import HomePage from './components/HomePage';

import { Route, Routes } from 'react-router';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';


function App() {
  return (
    <div className="App">
   

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="/beers" element={<Beers />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/beers/:id" element={<BeerDetails />}></Route>
      </Routes>

    </div>
  );
}

export default App;