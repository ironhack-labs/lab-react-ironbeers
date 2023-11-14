import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../src/pages/HomePage"
import AllBeersPage from "../src/pages/AllBeersPage"
import RandomBeerPage from "../src/pages/RandomBeerPage"
import AddBeerPage from "../src/pages/AddBeerPage"
import BeerDetailsPage from "../src/pages/BeerDetailsPage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React IronBeers</h1>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeersPage />}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}/>
        <Route path="/random-beer" element={<RandomBeerPage />}/>
        <Route path="/new-beer" element={<AddBeerPage />}/>
        
      </Routes>
    </div>
  );
}

export default App;
