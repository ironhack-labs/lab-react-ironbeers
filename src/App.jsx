import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>LAB | React IronBeers</h1>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
