import React from "react";
import {Switch, Route} from "react-router-dom";
import Landing from "./Landing";
import Beers from "./Beers";
import DetailsWrapper from "./DetailsWrapper";
import NewBeer from "./NewBeer";

export default function Routes() {
    return(
        <Switch>
          <Route exact path="/beers" component={() => <Beers />} />
          <Route exact path="/beers/:id" component={(props) => <DetailsWrapper {...props} />} />
          <Route exact path="/random-beer" component={() => <DetailsWrapper />} />
          <Route exact path="/new-beer" component={() => <NewBeer />} />
        </Switch>
    )
}