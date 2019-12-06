import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AllBeers from './components/allBeers'
import BeerDetails from './components/beerDetails'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">IronBeers</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">All Beers</Nav.Link>
            <Nav.Link href="#features">Random Beers</Nav.Link>
            <Nav.Link href="#pricing">New Beers</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={AllBeers} />
          <Route path="/:id" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
