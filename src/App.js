import { Routes, Route } from 'react-router-dom';
//import axios from 'axios';
import './App.css';

//import BeerDetails from './components/BeerDetails';
import BeersList from './components/BeersList';
import CreateBeer from './components/CreateBeer';
import HomePage from './components/HomePage';
import RandomBeer from './components/RandomBeer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersList />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<CreateBeer />} />
    {/*    <Route path='/beers/:id' element={<BeerDetails beers={beers} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
