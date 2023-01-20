import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NewBeer from "./components/NewBeer";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import BeerDetails from "./components/BeerDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [beersArr, setbeersArr] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const beersToDisplay = beersArr?.filter((beerObj) => {
    return beerObj.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setbeersArr(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <hr />
      <form>
        <label>
          Search a Beer:
          <input
            type="text"
            name="searchQuery"
            placeholder="Start typing a name"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </label>
      </form>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers beersArr={beersToDisplay} />} />
        <Route
          path="/beers/:beerId"
          element={<BeerDetails beersArr={beersArr} />}
        />
        <Route
          path="/random-beer"
          element={<RandomBeer beersArr={beersArr} />}
        />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
