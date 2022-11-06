import "./App.css";
import BeersList from "./pages/BeersList";
import RandomBeer from "./pages/RandomBeer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import AddBeer from "./pages/AddBeer";
import BeerDetails from "./pages/BeerDetails";
import { useState,useEffect } from "react";
import axios from "axios";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />

        {/* rutas de errores */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
