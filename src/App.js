import { NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import ListBeers from "./components/ListBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beers" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beer/:beerId" element={<SingleBeer />}/>
      </Routes>
    </div>
  );
}

export default App;