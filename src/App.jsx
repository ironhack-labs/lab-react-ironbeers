import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    const getBeers = async () => {
      const res = await axios("https://ih-beers-api2.herokuapp.com/beers");

      setBeers(res.data);
    };

    getBeers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/beers"
          element={<AllBeersPage beers={beers} setBeers={setBeers} />}
        />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route
          path="/new-beer"
          element={<AddBeerPage beers={beers} setBeers={setBeers} />}
        />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
