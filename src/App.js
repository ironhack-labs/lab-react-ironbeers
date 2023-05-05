import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ListBeersPage from './pages/ListBeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeersPage />} />
        <Route path="/beers/:beerId" element={<SingleBeerPage />} />
        <Route path="/beers/random" element={<RandomBeerPage />} />
        <Route path="/beers/new" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
