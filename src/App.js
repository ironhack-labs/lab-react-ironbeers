import "./App.css";
import HomePage from "./pages/HomePage";
import NewBeer from "./pages/NewBeer";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import { Routes, Route } from "react-router-dom";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
