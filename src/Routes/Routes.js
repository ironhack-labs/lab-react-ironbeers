import { Route, useLocation } from "react-router-dom";


import React from "react";
import { Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Beers from "../Pages/Beers/Beers";
import RandomBeer from "../Pages/RandomBeer/RandomBeer";
import NewBeer from "../Pages/NewBeer/NewBeer";

import Nav from "../Components/Nav";
import SingleBeer from "../Pages/SingleBeers/SingleBeer";


const AppRoute = () => {
  return (
    <React.Fragment>
      {['/', '/home', '/random-beer', '/new-beer', '/beers',].includes(useLocation().pathname) && <Nav />}
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Home />} path="*" />
        <Route element={<NewBeer />} path='/new-beer' />
        <Route element={<Beers />} path="/beers" />
        <Route element={<RandomBeer />} path="/random-beer" />
        <Route element={<SingleBeer />} path='/beers/:beerId' />
      </Routes>

    </React.Fragment >
  )
}

export default AppRoute;