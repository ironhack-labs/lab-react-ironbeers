import './App.css';
import HomePage from './components/HomePage/HomePage';
import AllBeers from './components/AllBeers/AllBeers';
import BeerDetails from './components/BeerDetails/BeerDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'




function App() {
  
    return (
      <div>

        <HomePage />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/beers' element={<AllBeers />} />
          <Route path='/beers/:beer_id' element={<BeerDetails />} />
          <Route path='/random-beer' element={<RandomBeer />} />
        </Routes>
       

      </div>
    );
  }

  export default App;
