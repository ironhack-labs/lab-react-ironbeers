import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Icon, Navbar } from "antd";
import { RandomBeer, SingleBeer, NewBeer, AllBeers, Home } from "./components";

const Router = () => {
  return (
    <BrowserRouter>
      <NavLink to="/">
        <Icon type="home" />
      </NavLink>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/all/:id" component={SingleBeer} />
        <Route exact path="/new" component={NewBeer} />
        <Route exact path="/all" component={AllBeers} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
