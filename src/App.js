import './App.css';
import './Components/Homepage'
import Homepage from './Components/Homepage';
import Beers from './Components/Beers';
import { Routes, Route } from 'react-router-dom';
import SingleBeer from './Components/SingleBeer';

function App() {
  return (
    <div className="App">
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/beers" element={<Beers />} />
    <Route path="/SingleBeer" element={<SingleBeer />} />
    <Route path="/random-beer" element={<RandomBeer />} />

    </Routes>
    </div>
    </div>
  );
}

export default App;