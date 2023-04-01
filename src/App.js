import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./views/HomePage";
import { List } from "./views/BeerList";
import { NewBeer } from "./views/NewBeer";
import { RandomBeer } from "./views/RandomBeer";
import { BeerDetail } from "./views/BeerDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<List />} />
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div >
  );
}

export default App
