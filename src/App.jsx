import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import Homepage from './pages/HomePage'
import AllBeersPage from './pages/AllBeersPage'
import RandomBeerPage from './pages/RandomBeerPage'
import AddBeerPage from './pages/AddBeerPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import Navbar from "./components/Navbar";

function App() {

  const [allBeers, setAllBeers] = useState([])

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((beers)=>{
            console.log(beers.data)
            setAllBeers(beers.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/beers" element={<AllBeersPage beers={allBeers} setBeers={setAllBeers}/>}></Route>
        <Route path="/random-beer" element={<RandomBeerPage/>}></Route>
        <Route path="/new-beer" element={<AddBeerPage/>}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage beers={allBeers} setBeers={setAllBeers}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
