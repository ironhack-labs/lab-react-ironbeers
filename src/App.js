import logo from "./logo.svg";
import "./App.css";
import ReactDom from "react-dom/client";
import { Link } from "react-router-dom";
import HomePage from "./componets/HomePage";
import { Route, Routes } from "react-router-dom";
import AllBeers from "./componets/AllBeers";
import BeerDetail from "./componets/BeerDetail";
import RandomBeer from "./componets/RandomBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllBeers" element={<AllBeers />} />
        <Route path="/BeerDetail/:beerId" element={<BeerDetail />} />
        <Route path="/RandomBeer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
