import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
