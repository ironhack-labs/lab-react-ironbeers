import { Routes, Route } from "react-router";
import Home from "./views/home/Home";
import Beers from "./views/beers/Beers";
import BeerDetail from "./views/beerDetail/BeerDetail";
import RandomBeer from "./views/randomBeer/RandomBeer";
import NewBeer from "./views/newBeer/NewBeer";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Beers" element={<Beers />} />
        <Route path="/Beers/:id" element={<BeerDetail />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />;
      </Routes>
    </div>
  );
}

export default App;
