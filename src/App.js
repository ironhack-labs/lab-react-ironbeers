import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/beers" element={<Beers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes>
  );
}

export default App;
