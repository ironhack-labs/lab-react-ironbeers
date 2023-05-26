import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import BeerList from './BeerList/BeerList';
import BeerDetail from './BeerDetails/BeerDetail';
import RandomBeer from './RandomBeer/RandomBeer';
import NewBeer from './NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beer' element={<BeerList />} />
        <Route path='/beer/:idBeer' element={<BeerDetail />} />
        <Route path='/randomBeer' element={<RandomBeer />} />
        <Route path='/newBeer' element={<NewBeer />} />

      </Routes>

    </div>
  );
}

export default App;
