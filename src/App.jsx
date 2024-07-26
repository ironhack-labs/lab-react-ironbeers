import "./App.css";
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBeerPage from "./pages/AddBeerPage"
import AllBeersPage from "./pages/AllBeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import HomePage from "./pages/HomePage"
import RandomBeerPage from "./pages/RandomBeerPage"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/beers" element={<AllBeersPage/>} />
      <Route path="/random-beer" element={<RandomBeerPage/>} />
      <Route path="/new-beer" element={<AddBeerPage/>} />
      <Route path="/beers/:beerId" element={<BeerDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
