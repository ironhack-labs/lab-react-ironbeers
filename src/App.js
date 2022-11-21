import './App.css';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import Beers from './components/Beers.jsx'
import RandomBeer from './components/Random-beer';
import NewBeer from './components/New-beer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
  <Route path="/allbeers" element={<Beers/>} />
  <Route path="/randombeer" element={<RandomBeer/>} />
  <Route path="/newbeer" element={<NewBeer/>} />
  <Route path="/:id" element={<BeerDetails/>} />
  </Routes>
    </div>
  );
}

export default App;
