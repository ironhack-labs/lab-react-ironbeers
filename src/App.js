/*import logo from './logo.svg';*/
import "./App.css";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<ListBeers />}></Route>
        <Route path="/single-beer/:id" element={<SingleBeer />}></Route>
        <Route path="random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
