import "./App.css";
import HomePage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import AllBeers from "./pages/AllBeers";
import SingleBeer from "./pages/Singlebeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<random-beer />} />
        <Route path="/new-beer" element={<new-beer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
