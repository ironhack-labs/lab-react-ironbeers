import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import Beers from "./pages/Beers"; 
import NewBeer from "./pages/NewBeer"; 
import RandomBeers from "./pages/RandomBeers"; 
import ErrorPage from "./pages/ErrorPage";
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>

      
    </div>
  );
}

export default App;
