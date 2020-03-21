import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeBtn from "./components/ui/homeButton"
import Beers from "./components/beers"
import Home from "./components/Home"

const App = () => {

  return (
    <>
      <Router>
        <HomeBtn path="/">Home</HomeBtn>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" component={Beers} />
        </Switch>

      </Router>

    </>
  )

}

export default App;
