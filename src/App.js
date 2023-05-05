
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Details from './pages/Details';


function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/addBeer" element={<NewBeer />} />
        <Route path="/beer/:beerId" element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
