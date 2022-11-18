import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import Beer from "./pages/Beer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:id" element={<Beer />} />
      </Routes>
    </div>
  );
}

export default App;
