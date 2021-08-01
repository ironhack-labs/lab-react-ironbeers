import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./Components/Home-Page";
import Beers from "././Components/Beers";
import Random from "./Components/Random";
import NewBeer from "./Components/New.beer";
import Header from "./Components/Header";
import BeerDetail from "./Components/BeerDetail";

class App extends Component {
  state = {
    allBeers: []
  };

  componentDidMount() {
    this.getAllTheBeers();
  }
  getAllTheBeers() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(allBeers => {
      this.setState({ allBeers: allBeers.data }); //.data because we have to return data
    });
  }
  showBeers = () => {
    return this.state.allBeers.map(eachBeer => {
      return (
        <div key={eachBeer._id} className="beerCard">
          <div className="beerText">
            <ul>{eachBeer.name}</ul>
            <h4>{eachBeer.tagline}</h4>
            <p>Creator: {eachBeer.contributed_by}</p>
          </div>
          <Link to={`/beer-details/${eachBeer._id}`}>
            <img
              style={{ width: "65px", height: "150px" }}
              src={eachBeer.image_url}
              alt="beer"
            />
          </Link>
        </div>
      );
    });
  };

  render() {
    //Never set state in here
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />

          <Route
            exact
            path="/beers"
            render={props => <Beers {...props} showMeBeers={this.showBeers} />}
          />
          <Route
            exact
            path="/random"
            render={props => <Random {...props} />}
          />
          <Route
            exact
            path="/new-beer"
            render={props => <NewBeer {...props} />}
          />
          <Route
            exact
            path="/beer-details/:beerId"
            render={props => <BeerDetail {...props} />}
          ></Route>
        </Switch>{" "}
      </div>
    );
  }
}
export default App;
