
import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/Homepage';
import Beers from './pages/Beers/Beers';
import OneBeer from './pages/OneBeer/OneBeer';
import RandomBeer from './pages/RandomBeer/RandomBeer';
import NewBeer from './pages/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<OneBeer />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
