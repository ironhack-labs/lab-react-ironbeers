
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavBarBeers from './components/NavBar/NavBar';
import Beers from './pages/HomePage';
import DetailsOneBeer from './pages/DetailsOneBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div>
      <NavBarBeers />
      <Routes>
        <Route path='/home' element={<Beers />} />
        <Route path='/details/:idBeer' element={<DetailsOneBeer />} />
        <Route path='/randombeer' element={<RandomBeer />} />

      </Routes>
    </div>
  );
}

export default App;
