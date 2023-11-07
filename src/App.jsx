import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "/src/pages/HomePage.jsx";
import AllBeersPage from '/src/pages/AllBeersPage.jsx';
import RandomBeerPage from '/src/pages/RandomBeerPage.jsx';
import AddBeerPage from '/src/pages/AddBeerPage.jsx';
import BeerDetailsPage from '/src/pages/BeerDetailsPage.jsx'
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeersPage />}/>
        <Route path="/random-beer" element={<RandomBeerPage />}/>
        <Route path="/new-beer" element={<AddBeerPage />}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}/>
      </Routes>
    </div>
  );
}

