import { Routes, Route } from "react-router-dom";
import { Home, ListBeers, SingleBeer, RandomBeer, NewBeer } from "./pages";
import { useState, useEffect } from "react";
import { NavBar } from "./components";

const axios = require("axios");

function Router(props) {
  return (
    <Routes>
      {/* <Route path="/" element={<CountriesList />}></Route> */}
      <Route path="/" element={<Home />} />
      <Route path="/list-beers" element={<ListBeers />} />
      <Route path="/single-beer/:id" element={<SingleBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="*" element={<h1>Not found 404 error</h1>} />
    </Routes>
  );
}

export default Router;
