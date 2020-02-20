import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
//import Beer from "./pages/Beer";//trae una
import Beers from "./pages/Beers";//trae todas
//import CreateBeer from "./pages/CreateBeer";//crea una

const Beer=()=><h1>Beer</h1>

const NewBeer=()=><h1>Create Beer</h1>
const RandomBeer=()=><h1>Random Beer</h1>


const router = () => {
  return (
    <BrowserRouter>
      <Header />
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