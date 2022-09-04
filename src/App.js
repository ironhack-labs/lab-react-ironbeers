import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddBeer from "./components/AddBeer.jsx";
import BeerList from "./components/BeerList.jsx";
import RandomBeer from "./components/RandomBeer.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={<BeerList data={data} setData={setData} />}
        />
        <Route path="/random-beer" element={<RandomBeer data={data} />} />
        <Route path="new-beer" element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;
