import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home"
//import Beers from "./components/beers"
import HomeBtn from "./components/ui/homeButton"

const App = () => {

  return (
    <>
      <Router>
        <HomeBtn path="/">Home</HomeBtn>

        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/beers" component={Beers} /> */}
        </Switch>

      </Router>

    </>
  )

}

export default App;
