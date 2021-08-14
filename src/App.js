import React from "react";

import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import AllBeers from "./Components/AllBeers";
import BeerDetails from "./Components/BeerDetails";
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
      
        <NavLink exact to="/beers">
          All Beers
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/beers" component={AllBeers} />
        <Route
          exact
          path="/beers/:id"
          component={BeerDetails}
        />
      </Switch>
    </div>
  );
}

export default App;
