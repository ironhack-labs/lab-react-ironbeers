import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BeersList from './pages/BeersList';
import BeerDetails from './pages/BeerDetails';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/beers' element={<BeersList />} />
          <Route path='/newBeer' element={<NewBeer />} />
          <Route path='/beers/beerDetails' element={<BeerDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
