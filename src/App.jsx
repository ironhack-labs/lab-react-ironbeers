import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBreweriesPage from "./pages/AllBreweriesPage";
import BreweryDetailsPage from "./pages/BreweryDetailsPage";
import RandomBreweryPage from "./pages/RandomBrewery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breweries" element={<AllBreweriesPage />} />
        <Route path="breweries/:breweryId" element={<BreweryDetailsPage />} />
        <Route path="/random-brewery" element={<RandomBreweryPage />} />
      </Routes>
    </div>
  );
}

export default App;
