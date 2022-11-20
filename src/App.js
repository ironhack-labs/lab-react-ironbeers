import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage.jsx"
import AllBeers from "./Pages/AllBeers.jsx";
import RandomBeer from "./Pages/RandomBeer.jsx";
import NewBeer from "./Pages/NewBeer.jsx";
import SingleBeer from "./Pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllBeers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/NewBeer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
