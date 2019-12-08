  
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Beers from "./pages/AllBeers/Beers";
import Detail from "./pages/Detail/Detail";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import NewBeer from "./pages/NewBeer/NewBeer"
import Navbar from "./pages/NavBar/NavBar";


const Router = () => (
  <BrowserRouter>
   <Navbar/>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Beers} path="/beers" />
      <Route exact component= {Detail} path= "/beers/:id"/>
      <Route exact component={RandomBeer} path="/random-beer" />
      <Route exact component={NewBeer} path="/new-beer" />
      
      
    </Switch>
  </BrowserRouter>
);

export default Router;

