import React, { Component } from "react";
import axios from "axios";
import BeerList from "./components/Beerlist";
import BeerDetails from "./components/BeerDetails";
import { Navbar, ListGroup, Nav } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    beers: [],
    foundBeer: []
  };

  componentDidMount() {
    console.log("All beers did mount");
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data, foundBeer: response.data[0] });
      })
      .catch(err => console.log(err));
  }

  getBeerDetails = id => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/" + id).then(response => {
      this.setState({ foundBeer: response.data });
    });
  };

  getRandomBeer = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(response => {
      this.setState({ foundBeer: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/">Ironbeers</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={this.getRandomBeer}>Random Beer</Nav.Link>
            <Nav.Link href="#newbeer">Add Beer</Nav.Link>
          </Nav>
        </Navbar>
        <div className="Main-Display">
          <ListGroup
            variant="flush"
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <ListGroup.Item>
              <BeerList beers={this.state.beers} detailsfetch={this.getBeerDetails} />
            </ListGroup.Item>
          </ListGroup>

          <Switch>
            <Route
              exact
              path="/"
              render={props => <BeerDetails {...props} beer={this.state.foundBeer} />}
            />
            <Route
              exact
              path="/:id"
              render={props => <BeerDetails {...props} beer={this.state.foundBeer} />}
            />
            <Route
              exact
              path="/random"
              render={props => <BeerDetails {...props} beer={this.state.foundBeer} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
