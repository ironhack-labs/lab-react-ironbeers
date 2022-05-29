import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import AllBeersPage from './pages/AllBeersPage';
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';


function App() {
  return (
    <div className="App">
  
     <Routes>
      <Route path= "/" element={<HomePage />} />
      <Route path= "/beers" element={<AllBeersPage />} />
      <Route path= "/beers/random" element={<RandomBeerPage />} />
      <Route path= "/new-beer" element={<NewBeerPage />} />
      <Route path= "/beers/:beerId" element={<BeerDetailsPage />} />
    </Routes>
    </div>

    
  );
}

export default App;
