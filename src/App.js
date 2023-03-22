import './App.css';
import HomePage from './views/HomePage/HomePage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/misc/Navbar/Navbar';
import AllBeers from './views/AllBeers/AllBeers';
import BeerDetail from './views/BeerDetail/BeerDetail';
import NewBeer from './views/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/beers/random-beer' element={<BeerDetail />} />
        <Route path='/beers/:id' element={<BeerDetail />} />
        <Route path='/beers/new' element={<NewBeer />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
}

export default App;
