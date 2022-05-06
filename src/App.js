import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Beers from './components/Beers.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer.js';
import Beer from './components/Beer.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<Beers/>} />
        <Route path="/random-beer" element={<RandomBeer/>} />
        <Route path="/new-beer" element={<NewBeer/>} />
        <Route path="/beers/:id" element={<Beer/>}/>
      </Routes>
    </div>
  );
}

export default App;
