import React from "react";
import "./App.css";
import Home from "./Home";
import Beers from "./Beers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import SingleBeer from "./SingleBeer"
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:beerId' element={<SingleBeer />} />
      </Routes>
    </div>
  )
}

export default App;

