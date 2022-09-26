import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import BeerPage from '../src/pages/BeerPage';
import HomePage from '../src/pages/HomePage';
import NewBeerPage from '../src/pages/New-BeerPage';
import RandomBeerPage from '../src/pages/Random-BeerPage';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeerPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
