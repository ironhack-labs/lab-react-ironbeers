import { Route, Routes } from "react-router-dom";
import Home from "./screen/links/Home";
import Beers from "./screen/links/Beers";
import NewBeer from "./screen/links/NewBeer";
import RandomBeer from "./screen/links/RandomBeer";
import BeerDetails from "./screen/links/BeerDetails";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
