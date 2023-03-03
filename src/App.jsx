import "./App.css";
import { Routes, Route } from "react-router-dom";
import Beers from "./components/Beers";
import Beer from "./components/Beer";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<Beer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </>
  );
}

export default App;
