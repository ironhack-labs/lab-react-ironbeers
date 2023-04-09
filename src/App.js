import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Homepage from "./components/Homepage";
import BeerDetails from "./components/BeerDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/beers/:Id" element={<BeerDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
