import { BrowserRouter, Route, useLocation } from "react-router-dom";


import React from "react";
import { Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Beers from "../Pages/Beers";
import RandomBeer from "../Pages/RandomBeer";
import NewBeer from "../Pages/NewBeer";
import Nav from "../Components/Nav";


const AppRoute = () => {
  return (
    <React.Fragment>
      {['/random-beer', '/new-beer', '/beers',].includes(useLocation().pathname) && <Nav />}
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Home />} path="*" />
        <Route element={<NewBeer />} path='/new-beer' />
        <Route element={<Beers />} path="/beers" />
        <Route element={<RandomBeer />} path="/random-beer" />
      </Routes>

    </React.Fragment >
  )
}

export default AppRoute;