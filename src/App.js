import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import './App.css';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/beer/:beerId' element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
