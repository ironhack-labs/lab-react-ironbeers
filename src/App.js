import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SpecificBeer from './pages/SpecificBeer';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-beers" element={<Beers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/beer/create" element={<NewBeer />} />
      <Route path="/beer/:beerId" element={<SpecificBeer />} />
      
    </Routes>
    </div>
  );
}

export default App;
