import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Beers from "./pages/Beers";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Layout />}>
            <Route path="/beers" element={<Beers baseUrl={baseUrl} />} />
            <Route
              path="/beers/:id"
              element={<BeerDetails baseUrl={baseUrl} />}
            />
            <Route
              path="/beers/random-beer"
              element={<RandomBeer baseUrl={baseUrl} />}
            />
            <Route
              path="/beers/new-beer"
              element={<NewBeer baseUrl={baseUrl} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
