import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beer/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
