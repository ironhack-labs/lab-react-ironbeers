import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/beers" element={<AllBeersPage/>}/>
      <Route path="/random-beer" element={<RandomBeerPage/>}/>
      <Route path="/new-beer" element={<AddBeerPage/>}/>
      <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>
    </Routes>
    </>
  );
}

export default App;
