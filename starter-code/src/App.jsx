import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import Beer from "./components/Beer";
import RandomBeer from "./components/RandomBeer";
import Container from "react-bootstrap/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/beers" component={Beers} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} />
            <Route path="/beer/:id" component={Beer} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
