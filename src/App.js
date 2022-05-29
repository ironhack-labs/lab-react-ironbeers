import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListBeers from "./pages/ListBeers";
import RandomBeers from "./pages/RandomBeers";
import SingleBeer from "./pages/SingleBeer";
import NewBeer from "./pages/NewBeer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beer" element={<ListBeers />} />
        <Route path="/random" element={<RandomBeers />} />
        <Route path="/beer/:beerId" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
