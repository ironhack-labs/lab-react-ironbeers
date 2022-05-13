import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

import Home from './components/Home';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {

  const [beerList, setBeerList] = useState([])

  useEffect(() => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers")
          .then(response => {
              setBeerList(response.data);
          })
          .catch(error => {
              console.log("There was an error retrieving the beer list from the database.", error)
          })
  }, [])




  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/beers" element={<ListBeers listOfBeers={beerList}/>}></Route>
      <Route path="/random-beer" element={<RandomBeer/>}></Route>
      <Route path="/new-beer" element={<NewBeer/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
