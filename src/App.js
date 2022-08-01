import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerDetails";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";

function App() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    fetchBeers();
  });

  const fetchBeers = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/")
      .then((response) => {
        const allBeers = response.data;
        setBeers(allBeers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={[<Header />, <Beers beers={beers} />]} />
        <Route
          path='/beers/:beerId'
          element={[<Header />, <BeerDetails beers={beers} />]}
        />
        <Route
          path='/random-beer'
          element={[<Header />, <RandomBeer beers={beers} />]}
        />
        <Route
          path='/new-beer'
          element={[<Header />, <NewBeer fetchBeers={fetchBeers} />]}
        />
      </Routes>
    </div>
  );
}

export default App;
