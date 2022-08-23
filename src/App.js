
import './App.css';
import Homepage from './Components/Homepage';
import Beers from './Components/Beers';
import SingleBeer from './Components/SingleBeer';
import RandomBeer from './Components/Randombeer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/beers" element={<Beers />} />
    <Route path="/SingleBeer" element={<SingleBeer />} />
    <Route path="/random-beer" element={<RandomBeer />} />

    </Routes>
    </div>
  
  );
}

export default App;
