import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return <div className="App">

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/Random-Beer" element={<RandomBeer />} />
      <Route path="/New-Beer" element={<NewBeer />} />
    </Routes>
  </div>;
}

export default App;
