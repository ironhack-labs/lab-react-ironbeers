import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import BeersList from "./components/BeersList";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import CreateBeer from "./components/CreateBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/beers" element={<BeersList />} />
          <Route path="/beers/random-beer" element={<RandomBeer />} />
          <Route path="/beers/create" element={<CreateBeer />} />

          <Route path="/beers/:beerId" element={<SingleBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
