import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePages";
import AllBeers from "./Pages/AllBeers"
import RandomBeer from "./Pages/RandomBeer.js";
import NewBeer from "./Pages/NewBeer.js";
import SingleBeer from "./Pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllBeers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/NewBeer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;