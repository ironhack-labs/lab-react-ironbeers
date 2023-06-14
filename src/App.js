import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import DetailedBeer from "./pages/DetailedBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:beerId" element={<DetailedBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
