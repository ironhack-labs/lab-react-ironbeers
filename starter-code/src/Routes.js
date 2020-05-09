import React from "react";
import  { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component= {() => <h1>Get all beers from DB</h1>} />
    <Route exact path="/:id" component= {() => <h1>Get the a single/specific beer</h1>} />
    <Route exact path="/random" component= {() => <h1>Get a random beer from the DB</h1>} />
    <Route exact path="/new" component= {() => <h1>Create a new beer (the fields are specified in the instructions)</h1>} />
    <Route exact path="/search?q=" component= {() => <h1>Get beers from the DB whose name contains the search term</h1>} />
  </Switch>
)

export default Routes;