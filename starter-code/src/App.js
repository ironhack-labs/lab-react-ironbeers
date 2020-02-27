import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import AllBeer from "./components/page/allBeer.js";
import BeerDetails from "./components/page/beerDetails.js";
import BeerRandom from "./components/page/randomBeer.js"
import Index from "./components/page/index.js";
import NewBeer from "./components/page/newBeer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" render={()=> <Index />} />
            <Route exact path="/beers" render={() => <AllBeer />} />
            <Route exact path="/beers/random" render={() => <BeerRandom />} />
            <Route exact path="/beers/new" render={() => <NewBeer />} />
            <Route path="/beers/:id" render={match => <BeerDetails {...match} />} />

          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
