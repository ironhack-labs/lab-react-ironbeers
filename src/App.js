import "./App.css";
import { Routes, Route } from "react-router-dom";

import BeersList from "./pages/BeersList";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NewBeer from "./pages/NewBeer";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />

        <Route path="/random-beer" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
