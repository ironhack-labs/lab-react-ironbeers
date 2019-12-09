import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Beers from "./pages/Beers";
import Home from "./pages/Home";
//import Login from "./pages/Login";
//import AddProject from "./pages/AddProject";

const Signup = () => <h1>Signup</h1>;

const Router = () => (
  <BrowserRouter>
    
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Beers} path="/beers" />
    </Switch>
  </BrowserRouter>
);

export default Router;
