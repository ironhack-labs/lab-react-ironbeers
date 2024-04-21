import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Home from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
