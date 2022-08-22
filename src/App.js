import './App.css';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import BeersPage from './pages/BeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeerPage from './pages/RandomBeerPage';
import AddBeer from './component/AddBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:id" element={<BeerDetailsPage />} />
        <Route path="random-beer" element={<RandomBeerPage />} />
        <Route path="new-beer" element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;
