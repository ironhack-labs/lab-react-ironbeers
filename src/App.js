import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import './App.css';

import NewBeerPage from './pages/NewBeerPage/NewBeerPage'
import RandomBeerPage from './pages/RandomBeerPage/RandomBeerPage'
import BeerListPage from './pages/BeerListPage/BeerListPage';
import SingleBeerPage from './pages/SingleBeerPage/SingleBeerPage';

function App() {
  return (
    <div>


      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeerListPage />} />
        <Route path='/:id' element={<SingleBeerPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<NewBeerPage />} />

      </Routes>
    </div>
  );
}


export default App;
