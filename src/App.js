import React, { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Beers from "./Pages/Beers/Beers";
import RandomBeer from "./Pages/RandomBeer/RandomBeer";
import NewBeer from "./Pages/NewBeer/NewBeer";
import SingleBeer from "./Pages/SingleBeer/SingleBeer";
import axios from "axios";

function App() {
  const [beerData, setBeerData] = useState([]);
  const [randomBeer, setRandomBeer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((result) => {
        setBeerData(result.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        setRandomBeer(result.data);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Getting the data...</div>;
  }

  if (isError) {
    return <div>Oopsie daisy there went something wrong</div>;
  }

  return (
    <div className="App">
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/beers" element={<Beers beerData={beerData} />} />
          <Route
            path="/random-beer"
            element={<RandomBeer randomBeer={randomBeer} />}
          />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route
            path="/beers/:id"
            element={<SingleBeer beerData={beerData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
