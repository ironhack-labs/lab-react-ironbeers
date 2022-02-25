import "./App.css";
import { useLocation, Routes, Route, Link } from "react-router-dom";
import Beers from "./pages/Beers";
import Beer from "./pages/Beer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [beerList, setBeerList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeerList(response.data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {useLocation().pathname !== "/" ? (
        <Link to="/"> Home </Link>
      ) : (
        <div>
          <Link to="/beers"> All beers </Link>
          <Link to="/random-beer"> Random Beer </Link>
          <Link to="/new-beer"> New Beer </Link>
        </div>
      )}
      <Routes>
        <Route path="/beers" element={<Beers beerList={beerList} />} />
        <Route path="/beers/:beerId" element={<Beer />} />
        <Route path="/random-beer" element={<RandomBeer beerList={beerList} />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
