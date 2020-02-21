import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreateNewBeer from "./pages/CreateNewBeer"
import RandomBeer from "./pages/RandomBeer"
import Beer from './pages/Beers'

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
          <Route path="/beers" component={Beer} exact />
          <Route path="/random" component={RandomBeer} exact />
          
        </Switch>
      </BrowserRouter>
    );
  };

  export default router