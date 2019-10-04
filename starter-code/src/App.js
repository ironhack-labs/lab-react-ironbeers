import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Beer from "./Components/Beer";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000").then(allBeersFromBackend => {
      console.log(allBeersFromBackend)
      this.setState({
        ...this.state,
        tasks: allBeersFromBackend.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/beer"
            render={() => {
              return <Beer beer={this.state.beer}></Beer>;
            }}
          />
        </Switch>
        <div className="home-card">
          <a href="/beer">
            <img src="./images/beers.png" alt="beer"></img>
          </a>
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            hic tenetur id recusandae omnis aperiam repellendus excepturi aut
            accusantium mollitia? Dolorem molestiae provident quo eligendi
            distinctio et consequuntur nihil impedit.
          </p>
        </div>
        <div className="home-card">
          <a href="/random-beer">
            <img src="./images/random-beer.png" alt="random beer"></img>
          </a>
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            hic tenetur id recusandae omnis aperiam repellendus excepturi aut
            accusantium mollitia? Dolorem molestiae provident quo eligendi
            distinctio et consequuntur nihil impedit.
          </p>
        </div>

        <div className="home-card">
          <a href="/new-beer">
            <img src="./images/new-beer.png" alt="new beer"></img>
          </a>
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            hic tenetur id recusandae omnis aperiam repellendus excepturi aut
            accusantium mollitia? Dolorem molestiae provident quo eligendi
            distinctio et consequuntur nihil impedit.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
