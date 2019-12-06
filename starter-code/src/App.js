import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import BeerList from "./components/beer-list";
import BeerDetail from "./components/beer-detail";
import BeerRandom from "./components/beer-random";
// import { Container, Row, Button, Modal } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <BeerList /> */}
        <Switch>
          <Route exact path="/" component={BeerList} />
          <Route path="/beers/:id" component={BeerDetail} />
          <Route path="/beers/random" component={BeerRandom} />
          {/* <Route path="/form" component={CoasterForm} /> */}
        </Switch>
      </>
    );
  }
}

export default App;
