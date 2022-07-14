import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './components/NavBar/NavBar';
import ListBeers from './Pages/ListBeers/ListBeers';

import NewBeer from './Pages/NewBeer/NewBeer';
import BeerDetails from './Pages/BeerDetails/BeerDetails';
import RandomBeer from './Pages/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/:beer_id" element={<BeerDetails />} /> // se tiene que llamar igual que en la linea 10 beer details
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>

    </div>
  );
}

export default App;
