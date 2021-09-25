import React from "react";
import { Route, Switch } from 'react-router-dom'

const Home = props => {
  return (
    <div>
        <Switch>
            <Route exact path="/beers"/>
            <Route exact path="/randdom-beer"/>
            <Route exact path="/new-beer"/>
        </Switch>
    </div>
  );
};

export default Home;