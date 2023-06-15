import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailPage from "./pages/BeerDetailPage";
import BeerRandom from "./pages/BeerRandom";
import NewBeerPage from "./pages/NewBeerPage";

function App() {
  return (
    <div className="d-flex justify-content-center text-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beers/:id" element={<BeerDetailPage />} />
        <Route path="/beers/random/:id" element={<BeerRandom />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
