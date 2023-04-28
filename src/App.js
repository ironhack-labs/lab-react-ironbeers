import './App.css';
import HomePage from './page/HomePage';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import AllBeers from './page/AllBeers';
import BeerDetails from './page/BeerDetails';
import RandomBeer from './page/RandomBeer';
import CreateBeer from './page/CreateBeer';


function App() {
  return (
    <div className="App">

    <Routes>

      <Route path="/"  element={<HomePage />} />
      <Route path="/beers"  element={<AllBeers />} />
      <Route path="/beers/:beerId"  element={<BeerDetails />} />
      <Route path="/beers/random-beer"  element={<RandomBeer />} />
      <Route path="/beers/new-beer"  element={<CreateBeer />} />

    </Routes>
     
    </div>
  );
}

export default App;
