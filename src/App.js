//jshint esversion:9

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage';
import { NewBeer } from './components/NewBeer';
import { RandomBeer } from './components/RandomBeer';
import { AllBeers } from './components/AllBeers';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>

      

    </div>
  );
}

export default App;
