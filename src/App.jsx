import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import axios from "axios"
import {useState, useEffect} from 'react'

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeerData();
    console.log(beers)
  }, []);

  const getBeerData = () => {
    axios.get("https://beers-lab-back.onrender.com/")
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }

  const addNewBeer = (beer) => {
    console.log(beer)
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage beers={beers}/>} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage addNewBeer={addNewBeer} />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;