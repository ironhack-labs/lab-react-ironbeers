import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AllBeers from "./pages/AllBeers";
import RandomBeers from "./pages/RandomBeers";
import NewBeer from "./pages/NewBeer";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beersList/:beerId" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
