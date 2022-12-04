import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react"
import Home from "./components/Home";
import Beer from "./components/Beer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";


function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getData = async function () {
      fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => response.json())
        .then(data => {
          data = data.splice(0, 30); //doing it bc data are poluted and i wanna keep just a real beers :)
          setBeers(data);
        })
        .catch(error => {
          console.log("you SUCK!");
        });
    }
    getData();
  }, [])

  return (
    <div>
      <nav className="NavBar">
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : "Link"}>HOME</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer" element={<Beer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
