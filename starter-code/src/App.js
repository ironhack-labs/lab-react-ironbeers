import React, { Component } from 'react';
import './App.css';
import {  Navbar, Nav } from "react-bootstrap";
import {Route, Switch} from 'react-router-dom'
import AllBeers from './components/AllBeers';
import beerDetails from "./components/BeerDetails";
import NewBeer from './components/NewBeer';
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">IronBeers</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">All Bears</Nav.Link>
            <Nav.Link href="/random">Random Beers</Nav.Link>
            <Nav.Link href="/new">New Beer</Nav.Link>
          </Nav>
        </Navbar>
        <Switch className="cuerpo">
          <Route exact path="/" component={AllBeers} />
          <Route exact path="/new" component={NewBeer} />
          <Route exact path="/:id" component={beerDetails} />
          <Route exact path="/random" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
