import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeView from "./views/Home";
import AllBeersView from "./views/AllBeers";
import RandomBeerView from "./views/RandomBeer";
import NewBeerView from "./views/NewBeer";
import SingleBeerView from "./views/SingleBeer";

import { allBeers, newBeer } from "./services/beer-api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.stillLoading = true;
    this.state.allBeers = [];
    this.state.beer = null;
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(formObject) {
    console.log(formObject);
    newBeer(formObject)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    allBeers()
      .then(allBeers => {
        this.setState({ allBeers, stillLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route
              exact
              path="/beers"
              render={props => (
                <AllBeersView {...props} beers={this.state.allBeers} />
              )}
            />
            <Route path="/beers/:id" component={SingleBeerView} />
            <Route path="/random-beer" component={RandomBeerView} />
            <Route
              path="/new-beer"
              render={props => (
                <NewBeerView {...props} submitter={this.submitForm} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/*
const beerService = axios.create({
  baseURL: "https://ironbeerapi.herokuapp.com/beers/all",
});
*/
