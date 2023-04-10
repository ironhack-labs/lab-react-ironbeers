import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RandomBeer from "./pages/RandomBeer";
import Beers from "./pages/Beers"
import NewBeer from "./pages/NewBeer";
import HomeBar from "./components/HomeBar";
import BeerDetail from "./pages/BeerDetail";
import { useState, useEffect } from "react";

function App() {

  const [beerList, setBeerlist] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => res.json())
      .then(data => {
        setBeerlist(data);
      })
      .catch(error => console.log('An error has ocurred', error));
  }, []);

  return (
    <div className="App bg-gray-900 text-white h-screen overflow-y-scroll">

      <HomeBar />

      <Routes>

        <Route path="/home?" element={<HomePage />} />

        <Route path="/beers" element={<Beers beerList={beerList} />} />

        <Route path="/random-beer" element={<RandomBeer />} />

        <Route path="/new-beer" element={<NewBeer />} />

        <Route path="/beers/:beerId" element={<BeerDetail beerList={beerList} />} />

      </Routes>

    </div>
  );
}

export default App;
