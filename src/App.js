import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import AddNewBeer from "./pages/AddNewBeer"
import { useState,useEffect } from "react";
import axios from "axios";


function App() {
  const [beers, setBeers] = useState();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<ListBeers beers={beers}/>}/>
        <Route path="/beers/:beerId" element={<SingleBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
