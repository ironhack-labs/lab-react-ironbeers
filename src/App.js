import { Route, Routes } from "react-router-dom";
import "./App.css";
import BeerDetails from "./components/BeerDetails";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import AllBeers from "./components/AllBeers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<AllBeers />}></Route>
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
