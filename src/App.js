import "./App.css";
import { Routes, Route } from "react-router-dom";
import BeerListPage from "./pages/BeerListPage";
import HomePage from "./pages/HomePage";
import NewBeerPage from "./pages/NewBeerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerListPage />} />
        <Route path="/new-beers" element={<NewBeerPage />} />
        <Route path="/beers" element={<BeerListPage />} />
      </Routes>
    </>
  );
}

export default App;
