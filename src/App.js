import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import AddBeer from "./pages/AddBeer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/new-beer" element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;
