import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import DetailBeer from "./components/DetailBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/single-beer" element={<DetailBeer />} />
        <Route path="/create-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
