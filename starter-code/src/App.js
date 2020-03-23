import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeBtn from "./components/ui/homeButton"
import Home from "./components/Home"
import Beers from "./components/beers"
import BeerId from "./components/beerId"
import RandomBeer from "./components/randomBeer"
import NewBeer from "./components/newBeer"

const App = () => {

  return (
    <>
      <Router>
        <HomeBtn path="/">Home</HomeBtn>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={Beers} />
          <Route path="/beers/:beerId" exact component={BeerId} />
          {/* : Tells react route   is a param and will match / with anything */}
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" exact component={NewBeer} />
        </Switch>

      </Router>

    </>
  )

}

export default App;
