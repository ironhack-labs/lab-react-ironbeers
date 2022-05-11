import './App.css';

import HomePage from './pages/HomePage';
import BeerPage from './pages/BeerPage';
import RandomBeerPage from './pages/RandomBeerPage'
import NewBeerPage from './pages/NewBeerPage'
import SingleBeerPage from './pages/SingleBeerPage'

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/beers" element={ <BeerPage /> } />
        <Route path="/random-beer" element={ <RandomBeerPage /> } />
        <Route path="/new-beer" element={ <NewBeerPage /> } />
        <Route path="/beers/:beerId" element={ <SingleBeerPage /> } />
      </Routes>
    </div>
  );
}

export default App;
