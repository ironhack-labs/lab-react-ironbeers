import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import BeersList from "./components/pages/BeersList";
import DetailBeer from "./components/pages/DetailBeer";
import RandomBeer from "./components/pages/RandomBeer";
import NewBeer from "./components/pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<BeersList />}></Route>
        <Route path="/beers/:beerId" element={<DetailBeer />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
