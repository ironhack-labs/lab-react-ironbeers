import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BeersList from "./pages/BeersList";
import RandomBeer from "./pages/RandomBeer";
import BeerDetails from "./pages/BeerDetails";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
