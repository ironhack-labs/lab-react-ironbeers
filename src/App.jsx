import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/HomePage";
import RandomBeerPage from "./pages/HomePage";
import AddBeerPage from "./pages/HomePage";
import BeerDetailsPage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
