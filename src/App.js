import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';

import './App.css';

function App() {
  return (
    <div className="App">

      <Routes> 
        <Route path='/' element={<Home/>} /> 
        <Route path='/beers' element={<Beers />} /> 
        <Route path='/random-beer' element={<RandomBeer />} /> 
        <Route path='/new-beer' element={<NewBeer/>} /> 
        <Route path='/beers/:beerId' element={<SingleBeer />} /> 
      </Routes> 
      
    </div>
  );
}

export default App;
