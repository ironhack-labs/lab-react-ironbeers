import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Beers from "./Pages/Beers";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";
import SingleBeer from "./Pages/SingleBeer";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [allBeers, setAllBeers] = useState([]);
  const url = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios(url)
      .then((data) => {
        setAllBeers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers beers={allBeers} />} />
        <Route
          path="/beers/:beerId"
          element={<SingleBeer beers={allBeers} />}
        />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
