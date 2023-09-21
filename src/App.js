import "./App.css";
import { Routes, Route } from "react-router-dom";
import BeerListPage from "./pages/BeerListPage";
import HomePage from "./pages/HomePage";
import NewBeerPage from "./pages/NewBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailPage from "./pages/BeerDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerListPage />} />
        <Route path="/beers/:id" element={<BeerDetailPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
      </Routes>
    </>
  );
}

export default App;
