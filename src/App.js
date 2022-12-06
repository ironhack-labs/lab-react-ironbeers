import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Beers from "./pages/Beers";
import Navbar from "../src/pages/components/Navbar";
import Homepage from "./pages/Homepage";
import NewBeer from "./pages/NewBeer";
import Random from "./pages/RandomBeers";
import SingleBeer from "./pages/SingleBeer";

function App() {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location.pathname, showNav]);

  return (
    <div className="App">
      <nav>{showNav && <Navbar />}</nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random" element={<Random />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  ); //
}

export default App;