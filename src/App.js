import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/beers" element={ <AllBeers />} />
        <Route path="/random-beer" element={ <RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beer-details/:beerId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
