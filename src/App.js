import "./App.css";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Homepage from "./components/Homepage";
import BeerDetails from "./components/BeerDetails";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    setLoading(true);
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data
        setLoading(false);
      })
      .catch((error) => {
        // Handle the error
        setLoading(false);
      });
  }, []);

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
        <RingLoader color={"#36D7B7"} loading={loading} css={override} size={150} />
      </div>
    </Router>
  );
}


export default App;
