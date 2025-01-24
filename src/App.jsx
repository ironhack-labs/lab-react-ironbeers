import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import RandomBeersPage from "./pages/RandomBeerPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/random-beer" element={<RandomBeersPage />} />
      </Routes>
    </div>
  );
}

export default App;
