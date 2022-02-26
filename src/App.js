import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";

function App() {
  const [beers, setBeers] = useState([]);

  const [showPage, setShowPage] = useState(true);
  const displayHeader = (toggle) => {
    setShowPage(toggle);
  };

  useEffect(() => {
    Axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beers) => {
        setBeers(beers.data);
      })
      .catch((err) => console.log("Can't get beers from API ", err));
  }, []);

  return (
    <div className="App">
      {showPage && <Header />}

      <Routes>
        <Route
          path="/"
          element={<HomePage displayHeader={displayHeader} />}
        ></Route>
        <Route
          path="/beers"
          element={<ListBeers displayHeader={displayHeader} beers={beers} />}
        ></Route>
        <Route
          path="/random-beer"
          element={<RandomBeer displayHeader={displayHeader} />}
        ></Route>
        <Route
          path="/new-beer"
          element={<NewBeer displayHeader={displayHeader} />}
        ></Route>
        <Route
          path="/beers/:id"
          element={<SingleBeer displayHeader={displayHeader} beers={beers} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
