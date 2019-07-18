import React, { Component } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import Beer from "./components/Beer"
import Home from "./components/Home";
import Beer from "./components/Beer";
import AllBeers from "./components/AllBeers";
// import NavBar from "./components/NavBar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
      randomBeer: [],

      filteredBeers: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/all").then(beers => {
      this.allBeers = beers.data;

      this.setState({
        ...this.state,
        filterQuery: "",
        cart: [],
        allBeers: beers.data
        // filteredBeers: movies.data
      });
    });
    axios.get("http://localhost:5000/random").then(beer => {
      this.randomBeer = beer.data;

      this.setState({
        ...this.state,
        // filterQuery: "",
        // cart: [],
        randomBeer: beer.data
        // filteredBeers: movie.data
      });
    });
  }

  render() {
    // console.log(this.state.allBeers);
    // console.log(this.state.randomBeer);

    return (
      <section>
        <div className="row">
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                var chosenCountry = props.match.params.chosenCountry;
                return <Home />;
              }}
            />
             <Route
              exact
              path="/allBeers"
              render={props => {
                var chosenCountry = props.match.params.chosenCountry;
                return <AllBeers beer={this.state.allBeers}/>;
            }}
            />
             <Route
              exact
              path="/newBeer"
              render={props => {
                var chosenCountry = props.match.params.chosenCountry;
                return <Home />;
              }}
            />
             <Route
              exact
              path="/randomBeer"
              render={props => {
                var chosenCountry = props.match.params.chosenCountry;
                return <Beer beer={this.state.randomBeer}/>;
              }}
            />
               <Route exact path='/viewBeer/:chosenBeer' render={(props) => {
              var chosenMovie = props.match.params.chosenBeer
              return <Beer movie={this.state.movies[chosenMovie]}/>
            }} />
            />
          </Switch>
        </div>
      </section>
    );
  }
}
