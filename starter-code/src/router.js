import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Beer from "./pages/Beer";//trae una
import Beers from "./pages/Beers";//trae todas
import RandomBeer from "./pages/RandomBeer";//trae una

//import CreateBeer from "./pages/CreateBeer";//crea una

const NewBeer=()=><h1>Create Beer</h1>



const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/new-beer" component={NewBeer} exact />
        <Route path="/beers/:beerId" component={Beer} exact />
        <Route path="/beers" component={Beers} exact />
        <Route path="/random-beer" component={RandomBeer} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default router;