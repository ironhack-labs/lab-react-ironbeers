import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer';
import { getByTitle } from '@testing-library/react';

function App() {
  return (
    <div className="App">

      <nav> 
        <Link to='/'>HOME</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/beers' element={<Beers/>}></Route>
        <Route path='/beers/:id' element={<BeerDetails/>}></Route>
        <Route path='/random-beer' element={<RandomBeer/>}></Route>
        <Route path='/new-beer' element={<NewBeer/>}></Route>
      </Routes>

    </div>
  );

}
export default App;
