import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<BeerDetails />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
    </div>
  );
}

export default App;