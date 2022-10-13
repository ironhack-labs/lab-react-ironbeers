import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import NewBeerPage from "./pages/NewBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/beers" element={<BeersPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<NewBeerPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
