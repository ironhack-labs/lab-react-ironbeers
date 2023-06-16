import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import BeerList from "./Pages/BeerList";
import BeerDetails from "./Pages/BeerDetails";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";

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
