import axios from "axios";

import "./App.css";
import HomePage from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import { useEffect } from "react";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [beersArray, setBeersArray] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/beers")
      .then((response) => {
        setBeersArray(response.data);
      })
      .catch((e) => console.log("error getting beers from API", e));
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<ListBeers beers={beersArray} />} />
        <Route
          path='/beers/:beerId'
          element={<SingleBeer beers={beersArray} />}
        />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
