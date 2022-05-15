
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Beers from "./components/Beers";
import RandomBeers from "./components/RandomBeer";
import BeerDetails from "./components/BeerDetails";
import CreateBeer from "./components/CreateBeer";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [beersArr, setBeersArr] = useState(null);
  const [beer, setBeer] = useState(null);
  const[randomBeer, setRandomBeer] = useState(null)

  const navigate = useNavigate();

  const getBeers = (query) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers${query}`)
      .then((response) => {
        if (query === "/") {
          return setBeersArr((prevBeers) => {
            return response.data;
          });
        } else if (query === "/random") {
          return setRandomBeer((prevBeers) => {
            return response.data;
          });
        } else {
          return setBeer((prevBeers) => {
            return response.data;
          });
        }
      })

      .catch((err) => {
        console.log("error getting beers...", err);
      });
  };

  const createBeer = (newBeer)=>{
 

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    .then(response=>console.log(response.data))
    .then(response=>{navigate("/beers")})
    .catch(err=>console.log("error creating new beer with API...", err))
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/beers"
          element={<Beers getBeers={getBeers} beersArr={beersArr} />}
        />
        <Route
          path="/beers/:id"
          element={<BeerDetails getBeers={getBeers} beer={beer} />}
        />
          <Route
          path="/random"
          element={<RandomBeers getBeers={getBeers} randomBeer={randomBeer} />}
        />
          <Route
          path="/create"
          element={<CreateBeer createBeer={createBeer} />}
        />
      </Routes>
    </div>
  );
}

export default App;
