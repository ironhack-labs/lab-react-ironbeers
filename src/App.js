import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BeerDetail } from "./screens/BeerDetail";
import { Home } from "./screens/Home";
import { List } from "./screens/List";
import { NewBeer } from "./screens/NewBeer";
import { RandomBeer } from "./screens/RandomBeer";

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
    </div>
  );
}

export default App;
