import { Routes, Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Beers from "./components/Beers"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <p>this is app</p>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/beers' element={<Beers />}></Route>
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
