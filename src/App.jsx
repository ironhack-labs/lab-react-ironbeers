import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import AddBeersPage from './pages/AddBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} /> 
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

