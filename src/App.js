import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beers from "./Pages/Beers";
import NewBeer from "./Pages/NewBeer";
import RandomBeer from "./Pages/RandomBeer";
import HomePage from "./Pages/HomePage";
import BeerDetails from "./Pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Beers" element={<Beers />} />
          <Route path="/Beers/:beerId" element={<BeerDetails />} />
          <Route path="/NewBeer" element={<NewBeer />} />
          <Route path="/RandomBeer" element={<RandomBeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
