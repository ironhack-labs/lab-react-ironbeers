
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Beers' element={<AllBeers />} />
        <Route path='/RandomBeer' element={<RandomBeer />} />
        <Route path='/NewBeer' element={<NewBeer />} />
        <Route path='/Beers/:beerId' element={<BeerDetails />} />
      </Routes>

    </div>
  );
}

export default App;
