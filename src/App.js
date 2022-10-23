import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import BeerDetails from "./components/BeerDetails";
import BeersList from "./components/BeersList";
import CreateBeer from "./components/CreateBeer";
import HomePage from "./components/HomePage";
import RandomBeer from "./components/RandomBeer";

function App() {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("error getting beers from the API", error);
      });
  }, []);

  const createBeer = (beerDetails) => {
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beerDetails)
      .then((response) => {
        setBeers([response.data, ...beers]);
        navigate("/beers");
      })
      .catch((error) => {
        console.log("error creating a new beer", error);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route
          path="/new-beer"
          element={<CreateBeer callbackToCreate={createBeer} />}
        />
        <Route path="/beers/:beerId" element={<BeerDetails beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
