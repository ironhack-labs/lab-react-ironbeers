import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AllBeers from "./pages/AllBeers";
import NewBeer from "./pages/NewBeer";
import Home from "./pages/Home";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-beers" element={<AllBeers />} />
        <Route path="/beer-details/:beerId" element={<BeerDetails />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
