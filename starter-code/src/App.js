import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeBtn from "./components/ui/homeButton"
import Home from "./components/Home"
import Beers from "./components/beers"
import BeerId from "./components/beerId"

const App = () => {

  return (
    <>
      <Router>
        <HomeBtn path="/">Home</HomeBtn>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={Beers} />
          <Route path="/beers/:beerId" component={BeerId} />
          {/* : Tells react route   is a param and will match / with anything */}
        </Switch>

      </Router>

    </>
  )

}

export default App;
