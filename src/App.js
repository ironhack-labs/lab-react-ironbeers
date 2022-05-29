import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import BeersList from "./pages/BeersList";
import BeerDetails from "./pages/BeerDetails";
import BeerRandom from "./pages/BeerRandom";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/beers/random" element={<BeerRandom />} />
        <Route path="/beers/newbeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
