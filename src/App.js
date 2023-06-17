import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import BeersList from './pages/BeersPage';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:id" element={<BeerDetails /> } />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<CreateBeer />} />
      </Routes>
    </div>
  );
}

export default App;
