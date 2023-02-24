import "./App.css";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Error from "./pages/Error";

function App() {
  const [beers, setBeers] = React.useState([]);
  const [randomBeer, setRandomBeer] = React.useState([]);
  const [selectedBeer, setSelectedBeer] = React.useState([]);

  const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

  React.useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    axios
      .get(`${apiURL}/random`)
      .then((response) => setRandomBeer(response.data))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    axios
      .get(`${apiURL}/:beerId`)
      .then((response) => setSelectedBeer(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/beers"
          element={
            <Beers
              beers={beers}
              showDetails={false}
            />
          }
        />

        <Route
          path="/beers/:beerId"
          element={
            <RandomBeer
              beers={selectedBeer}
              showDetails={true}
            />
          }
        />

        <Route
          path="/random"
          element={
            <RandomBeer
              beer={randomBeer}
              showDetails={true}
            />
          }
        />

        <Route
          path="/new"
          element={<NewBeer />}
        />

        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
}

export default App;
