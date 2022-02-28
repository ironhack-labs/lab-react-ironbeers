import "./App.css";

import Homepage from "./components/Homepage";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Beer from "./components/Beer";

import axios from "axios";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  const [beersList, setBeersList] = useState([]);
  const [filteredList, setFilteredList ] = useState(beersList)
  const [searchInput, setSearchInput ] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/beers`)
      .then((beersFromDb) => setBeersList(beersFromDb.data))
      .catch((err) => console.log(err));
  }, [beersList]);

  useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}`)
    .then((filteredList)=> {
      console.log(filteredList.data)
      setFilteredList(filteredList.data)
    })
    .catch(err=> console.log(err))
  }, [searchInput])

  const updateBeersList = (newBeer) => {
    setBeersList([...beersList, newBeer])
  }

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers 
        beersList={filteredList} 
        handleSearchInput={handleSearchInput}
        searchInput={searchInput}
        />} />
        <Route path="/beers/:beerId" element={<Beer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer updateBeersList={updateBeersList}/>} />
      </Routes>
    </div>
  );
}

export default App;
