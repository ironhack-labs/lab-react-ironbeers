import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import AllBeers from "./pages/AllBeers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers" element={<AllBeers />} />
      </Routes>
    </div>
  );
}

export default App;
