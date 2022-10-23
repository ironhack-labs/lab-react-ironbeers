import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import DetailBeer from "./components/DetailBeer";
import NewBeer from "./components/NewBeer";
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [beers, setbeers] = useState ({})

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((result) => {
            setbeers(result.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/single-beer/:beerId" element={<DetailBeer beers={beers}/>} />
        <Route path="/create-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
