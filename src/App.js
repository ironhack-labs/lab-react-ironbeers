import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
