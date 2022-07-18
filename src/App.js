import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Beers from "./Beers";
import BeerDetail from "./BeerDetail";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetail />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
