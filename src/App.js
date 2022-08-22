import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ListBeers from './Pages/ListBeers';
import BeerDetails from './Pages/BeerDetails';
import RandomBeer from './Pages/RandomBeer';
import AddBeer from './Pages/AddBeer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<ListBeers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/beers/random" element={<RandomBeer />} />
        <Route path="/beers/addbeer" element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;
