import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import HomePage from './components/HomePage';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeerList />} />
        <Route path='/random-beer' element={ <RandomBeer /> } />
        <Route path='/new-beer' element={ <NewBeer /> } />
    </Routes>

    </div>
  );
}

export default App;
