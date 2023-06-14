import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Beers from "./Components/Beers";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import { Link } from "react-router-dom";
import BeerDetail from "./Components/BeerDetail";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  return (
    <div className="App">
 {location.pathname !== "/" ? (
        <Link to="/">
          <header>🏠</header>
        </Link>
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beerDetail/:_id" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
