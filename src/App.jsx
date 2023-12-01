//App.jsx
import "./App.css";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
        {/* <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/beers">All Beers</Link>
          <Link to="/random-beer">Random Beer</Link>
          <Link to="/new-beer">Add Beer</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        </Routes>
    </div>
  );
}

export default App;
