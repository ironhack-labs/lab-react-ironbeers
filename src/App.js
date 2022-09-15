import "./App.css";
import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios";
import { Route, Routes } from "react-router-dom"; // <== IMPORT axios
import Beers from "./components/Beers";
import Homepage from "./components/Homepage";
import SingleBeers from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);
  //console.log(beers);

  const addNewBeer = (newBeer) => {
    setBeers([...beers, newBeer]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/beers/:beerId" element={<SingleBeers beers={beers} />} />
        <Route path="/randomBeer" element={<RandomBeer beers={beers} />} />
        <Route path="/NewBeer" element={<NewBeer addNewBeer={addNewBeer} />} />
      </Routes>
    </div>
  );
}

export default App;
