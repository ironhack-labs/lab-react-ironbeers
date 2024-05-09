import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import BeersListPage from './pages/BeersList/BeersListPage';
import BeerDetailsPage from './pages/BeerDetails/BeerDetailsPage';
import RandomBeerPage from './pages/RandomBeer/RandomBeerPage';
import NewBeerPage from './pages/NewBeer/NewBeerPage';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/beers' element={<BeersListPage/>}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}


export default App;

