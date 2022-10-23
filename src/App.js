import axios from "axios";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import home from "./assets/home.png";
import BeerDetails from "./components/BeerDetails";
import Beers from "./components/Beers";
import HomePage from "./components/HomePage";

function App() {
  // console.clear();

  const [beers, setBeers] = useState(null);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_BEERS_API}/beers`)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  };

  return (
    <div className="App">
      <NavLink to="/">
        <img className="home" src={home} alt="" />
      </NavLink>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/random-beer"></Route>
        <Route path="/new-beer"></Route>
        <Route
          path="/beers"
          element={<Beers beers={beers} callBackFetchData={fetchData} />}
        ></Route>
        <Route
          path="/beers/:id"
          element={<BeerDetails beers={beers} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
