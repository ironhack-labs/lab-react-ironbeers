import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BeersList from "./pages/BeersList";
import DetailBeer from "./pages/DetailBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
     
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
