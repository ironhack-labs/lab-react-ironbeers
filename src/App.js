import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeersListPage from "./pages/BeersListPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersListPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
