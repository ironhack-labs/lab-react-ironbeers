import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import BeersList from "./components/BeersList";
import SingleBeer from "./components/SingleBeer";
import { useEffect, useState } from "react";
const url = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBeers(data);
    }
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<BeersList beers={beers}/>} />
        <Route path="/beers/:id" element={<SingleBeer beers={beers}/>} />
      </Routes>
    </div>
  );
}

export default App;
