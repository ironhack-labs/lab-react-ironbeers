import "./App.css";
import { Routes, Route , useLocation} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/HomePage";
import { BeerPage } from "./pages/BeerPage";
import { BeersPage } from "./pages/BeersPage";
import { RandomBeerPage } from "./pages/RandomBeerPage";
import { NewBeerPage } from "./pages/NewBeerPage";
import { Header } from "./components/Header";

function App() {
  const [beers, setBeers] = useState([]);
  const [loading,setLoading] = useState(true)
  const getBeers = async () => {
    try {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(data);
      setLoading(false)
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getBeers();
  }, []);
  return (
    <div className="App">
      {useLocation().pathname !== "/" && <Header />}
      {!loading ? <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beers/:id" element={<BeerPage beers={beers} />} />
      </Routes>: <div>Loading...</div>}
    </div>
  );
}

export default App;
