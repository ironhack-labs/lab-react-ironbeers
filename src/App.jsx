import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className=" flex justify-center items-center  text-4xl font-extrabold text-blue-700 shadow-lg p-4 rounded-lg bg-white">
        Welcome to Beers App!
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-beer" element={<AddBeerPage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/:id" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
