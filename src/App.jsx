import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeerForm from "./components/NewBeerForm";
import SingleBeer from "./components/SingleBeer";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [showNav, setShowNav] = useState(true)
  const [beers, setBeers] = useState([]);
  const location = useLocation()

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });

  }, [] );

  useEffect(() => {
    if (location.pathname === "/") {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }, [location])


  const addNewBeer = (beer) => {
    const updatedBeers = [...beers, beer];

    setBeers(updatedBeers);
  };

  return (
    <div className="App">
      {showNav && <Navbar/>}
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeerForm addBeer={addNewBeer} />} />
        <Route path="/beers/:id" element={<SingleBeer beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
