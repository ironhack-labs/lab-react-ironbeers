import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewBeer from "./pages/NewBeer";
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import Beers from "./pages/Beers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
