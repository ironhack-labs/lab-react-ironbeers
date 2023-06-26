
import './App.css';
import BeerDetails from './components/BeerDetails';
import BeersList from './components/BeersList';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/beers' element={<BeersList />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
