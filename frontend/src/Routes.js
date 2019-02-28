import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Beers from "./components/beer/Beers"
import Detail from "./components/beer/Detail"
import New from "./components/beer/New"

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route exact path="/beers" component={Beers} />
    <Route path="/beers/:id" component={Detail} />
    <Route exact path="/beers/random" component={Detail} />
    <Route exact path="/beer/new" component={New} />
  </Switch>
)
