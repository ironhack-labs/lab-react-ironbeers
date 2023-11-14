import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<AllBeersPage />} />
      <Route path="/random-beer" element={<RandomBeerPage} />
      <Route path="/new-beer" element={<AddBeerPage} />
      <Route path="/beers/:beerId" element={<BeerDetailPage} />
    
    </Routes>
    </div>

  );
}

export default App;
