import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-beers" element={<AllBeers />} />
        <Route path="random-beer" element={<RandomBeer />} />
        <Route path="new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
