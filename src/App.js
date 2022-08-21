import './App.css';
import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path={'/'} element={<HomePage />} />
    <Route path={'/beers'} element={<ListBeers />} />
    <Route path={'/beers/:beerId'} element={<SingleBeer />} />
    <Route path={'/random-beer'} element={<RandomBeer />} />
    </Routes>
    </div>
  );
}

export default App;
