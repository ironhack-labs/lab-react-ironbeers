import "./App.css";
import Homepage from "./components/Homepage";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
