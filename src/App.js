import HomePage from "./components/HomePage";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import home from "./assets/home.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerDetails";

function App() {
  // console.clear();

  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BEERS_API}/beers`)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <NavLink to="/">
        <img className="home" src={home} alt="" />
      </NavLink>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<Beers beers={beers} />}></Route>
        <Route path="/random-beer"></Route>
        <Route path="/new-beer"></Route>
        <Route
          path="/beers/:id"
          element={<BeerDetails beers={beers} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
