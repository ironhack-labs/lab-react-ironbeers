import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreateNewBeer from "./pages/CreateNewBeer"
import Beers from "./pages/Beers"
import RandomBeer from "./pages/RandomBeer"

//const Home =() => <h1>Home</h1>
//const Beer =() => <h1>Beer</h1>
//const RandomBeer =() => <h1>Random Beer</h1>
//const NewBeer =() => <h1>New Beer</h1>

const router = () => {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers/create" component={CreateNewBeer} exact />
          <Route path="/beers" component={Beers} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          
        </Switch>
      </BrowserRouter>
    );
  };

  export default router