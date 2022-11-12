import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import BeersList from "./components/BeersList";
import SingleBeer from "./components/SingleBeer";
import { useEffect, useState } from "react";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
export const BASE_URL = "https://ih-beers-api2.herokuapp.com/";

function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function fetchBeers() {
      const response = await fetch(BASE_URL + "beers");
      const data = await response.json();
      console.log(data);
      setBeers(data);
    }
    fetchBeers();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/beers"
          element={<BeersList beers={beers} setBeers={setBeers} />}
        />
        <Route path="/beers/:id" element={<SingleBeer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
