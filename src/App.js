import "./App.css";
import { Route, Routes } from "react-router-dom";
import RandomBeer from "./components/RandomBeer";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import DetailedBeer from "./components/DetailedBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/beers" element={<Beers />} />
        <Route path="/random-beers" element={<RandomBeer />} />

        <Route path="/new-beer" element={<NewBeer />} />

        <Route path="/beers/:id" element={<DetailedBeer />} />
      </Routes>
    </div>
  );
}

export default App;
