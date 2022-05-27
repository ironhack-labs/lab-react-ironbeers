import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";
import BeerList from "./Pages/BeerList";
import SingleBeer from "./Pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/" >Home </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
