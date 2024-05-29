import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllBeersPage from "./pages/AllBeersPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import HomePage from "./pages/HomePage";
import RandomBeerPage from "./pages/RandomBeerPage";
import Navbar from "./components/Navbar";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
