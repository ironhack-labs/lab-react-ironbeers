import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeerDetails from './pages/BeerDetails';

function App() {

  return (
    <div className="App">

   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/beers' element={<Beers />}></Route>
    <Route path='/new-beer' element={<NewBeer />}></Route>
    <Route path='/random-beer' element={<RandomBeer />}></Route>
    <Route path="/beers/:beerId" element={<BeerDetails />}></Route>
   </Routes>
    </div>
  );
}

export default App;
