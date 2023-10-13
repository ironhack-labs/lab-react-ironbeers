import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeersPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beer/:id" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
