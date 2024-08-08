import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

// Lib functions
import { getBeersFromBeersAPI } from "../lib/beers";
// import data from "./";


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getBeersFromBeersAPI().then((data) => setItems(data));
  }, []);


  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage beers={items} />} />
        <Route path="/beers" element={<AllBeersPage /*startingBeers={items}*/ />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage beers={items} />} />
      </Routes>
    </div>
  );
}

export default App;