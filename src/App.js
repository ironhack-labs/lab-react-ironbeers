import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Beers from "./Beers";
import BeerDetail from "./BeerDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/projects/:id" element={<BeerDetail />} />
        <Route path="/new-beer" element={<Home />} />
        <Route path="/random-beer" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
