import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

import './App.css';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer'
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/random-beer" element={<RandomBeer/>} />
        <Route path="/beers" element={<AllBeers/>} />
        <Route path="/beers/:beerid" element={<SingleBeer/>} />
      
        <Route path="/new-beer" element={<NewBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
