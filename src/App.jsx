import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import axios from "axios";

function App() {

  const [beersAll, setBeersAll] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeersAll(response.data);
      setFetching(false);
    });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage beersAll={beersAll}  />} />
        <Route path="/random-beer" element={<RandomBeerPage  />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage beersAll={beersAll} />} />
      </Routes>
    </div>
  );
}

export default App;
