import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import { useState } from "react";
import axios from "axios";
import defaultBeerImage from './assets/DefaultBeer.jpg'

function App() {
  const url="https://ih-beers-api2.herokuapp.com/beers"
  const [beers, setBeers] = useState(null);
  const getData = async ()=>{
    try {
      const response = await axios.get(url)
      if (!response.data.image_url || response.data.image_url === '' ){
        response.data.image_url = defaultBeerImage
      }
      setBeers(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage getData={getData} beers={beers} setBeers={setBeers}/>} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage getData={getData}/>} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;