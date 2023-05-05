import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [beersAll, setBeersAll] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeersAll(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Beers beersAll={beersAll} />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route
            path="/beers/:beerId"
            element={<BeerDetailsPage beersAll={beersAll} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
