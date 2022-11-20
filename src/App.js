import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBeers from './Components/AllBeers';
import NewBeer from './Components/NewBeer';
import Home from './Components/Home';
import RandomBeer from './Components/RandomBeer';
import axios from 'axios';
import BeerDetail from './Components/BeerDetail';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/AllBeers" element={<AllBeers />} />
        <Route path="/NewBeer" element={<NewBeer />} />
        <Route path="/RandomBeer" element={<RandomBeer />} />
      </Routes>
      <Routes>
        <Route path="/AllBeers/:id" element={<BeerDetail />} />
      </Routes>

    </div>
  );
}

export default App;
