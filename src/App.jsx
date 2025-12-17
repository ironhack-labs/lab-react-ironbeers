import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import { useEffect, useState } from "react";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function getAllBeers() {
      try {
        const response = await axios
          .get("https://beers-api.edu.ironhack.com/beers")
          console.log(response.data)
          setBeers(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllBeers()
  }, []);

  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage beers={beers} setBeers={setBeers} />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage beers={beers} setBeers={setBeers}/>} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage beers={beers} setBeers={setBeers} />} />
      </Routes>
    </div>
  );
}

export default App;