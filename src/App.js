import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import ListBeers from './components/ListBeers';
import { useEffect, useState } from "react";

function App() {
  const[beers, setBeers] = useState()
  const fetchBeer = () => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      setBeers(response.data)
      console.log(response.data)
    }) 
  }
  useEffect(() => {
    fetchBeer()
  }, [])
  return (
    <BrowserRouter>
    <HomePage/>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<ListBeers beers={beers}/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
