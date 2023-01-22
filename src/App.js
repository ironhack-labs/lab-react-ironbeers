import './App.css';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeers';
import RandomBeer from './pages/RandomBeer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>

        <Route path="/" element={ <HomePage /> } />

        <Route path="/beers" element={ <Beers /> } />

        <Route path="/beers/:id" element={ <SingleBeer /> }/>
        
        <Route path="/randombeer" element={ <RandomBeer /> }/>

        <Route path="/newbeer" element={ <NewBeer /> } />

      </Routes>
    </div>
  );
}

export default App;
