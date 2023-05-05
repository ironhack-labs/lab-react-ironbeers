import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route
          path="/beers/:beerId"
          element={<BeerDetailsPage beers={beers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
