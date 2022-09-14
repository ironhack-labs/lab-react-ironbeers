import { BrowserRouter, Route } from "react-router-dom";


import React from "react";
import { Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Beers from "../Pages/Beers";
import RandomBeer from "../Pages/RandomBeer";
import NewBeer from "../Pages/NewBeer";


const AppRoute = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Home />} path="*" />
          <Route element={<NewBeer />} path='/new-beer' />
          <Route element={<Beers />} path="/beers" />
          <Route element={<RandomBeer />} path="/random-beer" />
        </Routes>
      </BrowserRouter>
    </React.Fragment >
  )
}

export default AppRoute;