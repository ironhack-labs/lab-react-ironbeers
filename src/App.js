import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.js";
import AllBeers from "./components/AllBeers";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/allBeers" element={<AllBeers />} />
        <Route path="/randomBeer" element={<RandomBeer />} />
        <Route path="/newBeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;