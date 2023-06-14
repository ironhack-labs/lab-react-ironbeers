import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BeerList from "./components/BeerList";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
