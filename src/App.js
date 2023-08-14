import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/Beers/:beerId" element={<Details />} />
      <Route path="/Beers" element={<Beers />} />
      <Route path="/NewBeer" element={<NewBeer />} />
      <Route path="/RandomBeer" element={<RandomBeer />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
