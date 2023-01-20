import { Route, Routes } from 'react-router-dom';
import './App.css';
import BeerDetails from './components/BeerDetails';
import Beers from './components/Beers';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/beers" element={<Beers/>}/>
          <Route path="/random-beer" element={<RandomBeer/>}/>
          <Route path="/new-beer" element={<NewBeer/>}/>
          <Route path="/beers/:id" element={<BeerDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;

