//jshint esversion:9

import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { NewBeer } from "./components/NewBeer";
import { RandomBeer } from "./components/RandomBeer";
import { AllBeers } from "./components/AllBeers";
import { BeerDetails } from "./components/BeerDetails";
import { NavBar } from "./components/NavBar";

function App() {

  let location = useLocation();
  
  return (
    
    <div className="App container-fluid">
      <div className="row">

        {location.pathname !== "/" && <NavBar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/beers"
            element={<AllBeers />}
          />
          <Route
            path="/random-beer"
            element={<RandomBeer />}
          />
          <Route
            path="/new-beer"
            element={<NewBeer />}
          />
          <Route
            path="/beers/:beerId"
            element={<BeerDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
