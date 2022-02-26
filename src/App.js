import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerDetails";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <div className="App">

    <Header/>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<Beers />}></Route>
        <Route
          path="/beers/:beerId"
          element={<BeerDetails />}
        ></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
