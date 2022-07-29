import "./App.css";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerDetails";
import CreateBeer from "./components/CreateBeer";
import RandomBeer from "./components/RandomBeer";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    fetchBeers();
  }, []);

  const baseURL = "https://ih-beers-api2.herokuapp.com";
  // .get(process.env.REACT_APP_API_BASE_URL + "/beers")

  const fetchBeers = () => {
    axios
      .get(baseURL + "/beers")
      .then((response) => {
        const beers = response.data;
        setBeers(beers);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createBeer = (beerInfo) => {
    axios
      .post(baseURL + "/beers/new", beerInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <HomePage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/beers"
          element={<Beers beers={beers} setBeers={setBeers} />}
        />
        <Route
          path="/beers/:id"
          element={<BeerDetails beers={beers} setBeers={setBeers} />}
        />
        <Route
          path="/new-beer"
          element={
            <CreateBeer
              beers={beers}
              setBeers={setBeers}
              createBeer={createBeer}
            />
          }
        />
        <Route
          path="/random-beer"
          element={<RandomBeer beers={beers} setBeers={setBeers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
