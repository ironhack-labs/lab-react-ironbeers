import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
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
