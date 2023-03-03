import "./App.css";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import NewBeer from "./pages/New-Beer";
import RandomBeer from "./pages/Random-Beer";
import { Routes, Route } from "react-router-dom";
import BeerDetails from "./components/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/New-Beer" element={<NewBeer />} />
        <Route path="/Random-Beer" element={<RandomBeer />} />
        <Route path="/beer/:beerId" element={<BeerDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
