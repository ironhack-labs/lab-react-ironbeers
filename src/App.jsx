import { Route, Routes, Navigate } from 'react-router';
import './App.css';
import Home from "./components/Home"
import Beers from "./components/Beers"
import BeerDetails from "./components/BeerDetails"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
        <Route path="*" element={<Navigate to="/home" replace/>} />
      </Routes>
    </div>
  );
}

export default App;