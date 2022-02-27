import "./App.css";
import HomePage from "./components/HomePage";
import BeersList from "./components/BeersList";
import BeerDetails from "./components/BeerDetails";
import NewBeer from "./components/NewBeer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<BeerDetails />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
