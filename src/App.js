import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RandomBeer from "./pages/RandomBeer";
import AddBeer from "./pages/AddBeer.jsx";
import Header from "./components/Header";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddBeer />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beer-details/:idBeer" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
