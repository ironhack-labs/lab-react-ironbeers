import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import beers from './components/BeersPage/Beers';
import Beers from './components/BeersPage/Beers';
import RandomBeer from './components/RandomBeerPage/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import BeersDetails from './components/BeerDetaisPage/BeerDetails';

function App() {
  return (
    <div className="App">
     <Routes>
    
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeersDetails beers={beers}/>} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
        
      </Routes>
    </div>
  );
}

export default App;
