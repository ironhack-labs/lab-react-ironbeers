// import './App.css';
import { Routes, Route } from 'react-router-dom';
import BeersPage from './pages/BeersPage';
import HomePage from './pages/HomePage';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/randombeer' element={<RandomBeer />} />
        <Route path='/newbeer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
