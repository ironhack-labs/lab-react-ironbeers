import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetails from "./components/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<Beers />}>
          Beers
        </Route>
        <Route path="/random-beer" element={<RandomBeer />}>
          RandomBeer
        </Route>
        <Route path="/new-beer" element={<NewBeer />}>
          New Beer
        </Route>
        <Route path="/beers/:id" element={<BeerDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
