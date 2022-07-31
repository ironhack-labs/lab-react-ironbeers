import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Beers } from './components/Beers';
import { RandomBeer } from './components/RandomBeer';
import { NewBeer } from './components/NewBeer';
import { Home } from './components/Home';
import { BeerDetails } from './components/BeerDetails';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<Beers/>} />
        <Route path="/beers/:beerId" element={<BeerDetails/>} />
        <Route path="/random-beer" element={<RandomBeer/>} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>


    </div>
  );
}

export default App;
