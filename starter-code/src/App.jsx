import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
// import { Navbar, Table, Row, Col, Card } from "react-bootstrap";
import { list } from "./services/beers-api";

import Home from "./components/Home.jsx";
import AllBeers from "./components/AllBeers.jsx";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Nav from "./components/Nav.jsx";

class App extends Component {
  // contructor(props) {
  //   super(props);
  //   this.state = {
  //     beerslist: []
  //   };
  // }

  // componentDidMount() {
  //   list()
  //     .then(beerslist => {
  //       this.setState({
  //         beerslist
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" component={AllBeers} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/random-beer" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
