import Home from './Components/Home';
import Beers from './Components/Beers';
import RandomBeers from './Components/Random-beers';
import NewBeer from './Components/New-beer';
import { Route, Routes } from 'react-router-dom';
import BeerDetails from './Components/BeerDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        < Route path="/" element={<Home/>} />
        < Route path="/BeerList" element={<Beers/>} />
        <Route path="/BeerList/BeerDetails/:Beer_id" element={<BeerDetails/>} />
        < Route path="/RandomBeers" element={<RandomBeers/>} />
        <Route path="/NewBeer" element={<NewBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
