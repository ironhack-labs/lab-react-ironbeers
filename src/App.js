import logo from "./logo.svg";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
// import { ThemeContext } from "./contexts/theme";

import Beers from "./pages/Beers";
import Newbeer from "./pages/Newbeer";
import Randombeer from "./pages/Randombeer";
import Home from "./pages/Home";
import BeerDetails from "./pages/BeerDetails";

function App() {
  // const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="beers" element={<Beers />} />
        <Route path="newbeer" element={<Newbeer />} />
        <Route path="randombeer" element={<Randombeer />} />
        <Route path="/:beerId" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
