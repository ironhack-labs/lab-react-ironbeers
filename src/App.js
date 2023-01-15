import './App.css';
import Home from '../src/composants/Home'
import Navbar from './composants/Navbar';
import {Route, Routes } from 'react-router-dom';
import Beers from './composants/Beers';
import RandomBeer from './composants/RandomBeer';
import NewBeer from './composants/NewBeer';
import BeerDetail from './composants/BeerDetail';


function App() {
  
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/:beerID' element={<BeerDetail/>} />

      </Routes>


    </div>
  );
}

export default App;
