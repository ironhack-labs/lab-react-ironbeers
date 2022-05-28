import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import AddBeer from "./pages/AddBeer";
import Beers from "./pages/Beers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/:beerId" element={<BeerDetails />} />
        <Route path="/new-beer" element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;
