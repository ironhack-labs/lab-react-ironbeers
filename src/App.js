import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllBeers from "./components/AllBeers";
import Navbar from "./components/Navbar";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Homepage from "./components/Homepage";
import { useEffect, useState } from "react";
import axios from "axios";
import BeerDetails from "./components/BeerDetails";
import SpinningBeer from "./components/SpinningBeer";

function App() {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/beers")
      .then((response) => setBeers(response.data))
      .catch((error) => error);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/beers"
          element={
            <>
              <Navbar />
              <AllBeers beers={beers} />
            </>
          }
        />
        <Route
          path="/beer/:beerId"
          element={
            <>
              <Navbar />
              <BeerDetails beers={beers} />
            </>
          }
        />
        <Route
          path="/beers/random/"
          element={
            <>
              <Navbar />
              <RandomBeer beers={beers} />
            </>
          }
        />
        <Route
          path="/beers/random/spinning"
          element={
            <>
              <Navbar />
              <SpinningBeer beers={beers} />
            </>
          }
        />
        <Route
          path="/new"
          element={
            <>
              <Navbar />
              <NewBeer beers={beers} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

//*********Rendering elements in specific components***********
//Check how the routes have been setup to understand where to render links/html elements in specific components */
