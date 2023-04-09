import { Route, Routes } from 'react-router';
import './App.css';

import Homepage from './components/Homepage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Homepage /> } />
        <Route path='/beers' element={<Beers />} />
        <Route path='/random-beer' element={<RandomBeer /> }/>
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:beerId' element={<BeerDetails />} />
      </Routes>

      
    </div>
  );
}

export default App;
