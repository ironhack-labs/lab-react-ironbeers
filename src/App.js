import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewBeer from "./pages/NewBeer";
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import Beers from "./pages/Beers";
import SingleBeer from "./pages/SingleBeer";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
