import logo from "./logo.svg";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Beers from "./pages/Beers";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage.jsx";
import NewBeer from "./pages/NewBeer.jsx"
import RandomBeer from "./pages/RandomBeer";
import axios from "axios";

const beerLink = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    let response = await axios.get(beerLink);
    setBeers(response.data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path="/Beers" element={<Beers beers={beers} />} />
        <Route path='/NewBeer' element={<NewBeer/>}/>
        <Route path='/RandomBeer' element={<RandomBeer beers={beers}/>} />
      </Routes>
    </div>
  );
}

export default App;
