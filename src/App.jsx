import './App.css';
import HomePage from './components/HomePage/HomePage';
import AllBeers from './components/HomePage/AllBeers/AllBeers';
import NewBeer from './components/HomePage/NewBeer/NewBeer';
import Navigation from './components/HomePage/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import RandomBeer from './components/HomePage/RandomBeer/RandomBeer';
import BeerDetails from ''

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/details/:_id" element={<BeerDetails />} />
      </Routes>

    </div>
  );
}

export default App;
