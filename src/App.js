import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BeerDetail } from "./screens/Beer/BeerDetail";
import { Home } from "./screens/misc/Home";
import { List } from "./screens/Beer/List";
import { NewBeer } from "./screens/Beer/NewBeer/NewBeer";
import { RandomBeer } from "./screens/Beer/RandomBeer";

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
