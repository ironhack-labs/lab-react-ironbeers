import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Beers from './Pages/Beers/Beers';
import BeerDetails from './Pages/BeerDetails/BeerDetails';
import RandomBeer from './Pages/RandomBeer/RandomBeer';
import NewBeer from './Pages/NewBeer/NewBeer';



function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
     </Routes>
    </div>
  );
}

export default App;
