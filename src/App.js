import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Beers from "./pages/Beers";
import Homepage from "./pages/Homepage";
import NewBeer from "./pages/NewBeer";
import RandomBeer from './pages/RandomBeer';
import SpecificBeer from "./pages/SpecificBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />}/>
        <Route path="/beers/:id" element={<SpecificBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
