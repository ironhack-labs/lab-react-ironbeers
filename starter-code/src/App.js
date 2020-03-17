import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Beer } from "./pages/Beers";
import { RandomBeer } from "./pages/Random-beer";
import { NewBeer } from "./pages/New-beer";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/beers" component={Beer}></Route>
          <Route exact path="/random-beer" component={RandomBeer}></Route>
          <Route exact path="/new-beer" component={NewBeer}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
