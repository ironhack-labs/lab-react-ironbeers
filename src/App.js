import './App.css';
import AllBeersPage from './pages/AllBeersPage'
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage.js';
import BeerDetailPage from './pages/BeerDetailPage';

import { Routes, Route } from "react-router-dom"; 


function App() {
  return (
    <div className="App">

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<NewBeerPage />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
