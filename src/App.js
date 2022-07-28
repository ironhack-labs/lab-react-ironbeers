import logo from './logo.svg';
import './App.css';

import HomePage from './pages/HomePage';
import BeersListPage from './pages/BeersListPage';

import { Routes, Route } from 'react-router-dom';
import SingleBeerPage from './pages/SingleBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersListPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/beers/:beerId" element={<SingleBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
