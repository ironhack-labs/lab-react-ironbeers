import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/beers" element={<AllBeersPage />} />
        <Route exact path="/random-beer" element={<RandomBeerPage />} />
        <Route exact path="/new-beer" element={<AddBeerPage />} />
        <Route exact path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
