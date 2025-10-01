import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<AllBeersPage />} />
      <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      <Route path="/new-beer" element={<AddBeerPage />} />
      <Route path="/random-beer" element={<RandomBeerPage />} />
    </Routes>
  );
}

export default App;
