import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import BeersList from "./components/BeersList";
import BeerDetails from "./components/BeerDetails";
import CreateBeer from "./components/CreateBeer";
import RandomBeer from "./components/RandomBeer";
// import NavBar from "./components/NavBar";

function App() {
  const [beers, setBeers] = useState(null);
  //  console.log(beers)

  const loadBeers = () => {
    axios
      .get(process.env.REACT_APP_APIURL)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => {
        console.log("Error loading the beers from API", e);
      });
  };

  useEffect(() => {
    loadBeers();
  }, []);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/beers"
          element={beers ? <BeersList beers={beers} /> : <div> Loading...</div>}
        />
        <Route
          path="/create"
          element={<CreateBeer callbackToLoadBeers={loadBeers} />}
        />
        <Route
          path="/beers/:beerId"
          element={
            beers ? <BeerDetails beers={beers} /> : <div> Loading...</div>
          }
        />
        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
