import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeersList from "./pages/BeersList";
import BeerDetails from "./pages/BeerDetails";
import BeerRandom from "./pages/BeerRandom";
import BeerCreate from "./pages/BeerCreate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:beersId" element={<BeerDetails />} />
        <Route path="/beers/random" element={<BeerRandom />} />
        <Route path="/beers/new" element={<BeerCreate />} />
      </Routes>
    </div>
  );
}

export default App;
