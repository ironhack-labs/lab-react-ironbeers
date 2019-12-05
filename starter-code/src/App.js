import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Beer from "./components/Beer";
import ListsBeers from "./components/listBeers/ListBeers";
import axios from "axios";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      newBeer :{}
    };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(allBeers => {
      this.setState({
        ...this.state,
        beers: allBeers.data
      });
    });
  }

 
  writeNewBeer(e){

    const {name, value} = e.target;

    this.setState({
      ...this.state,
      newBeer : {
        ...this.state.newBeer,
        [name] : value
      }
    })
  }

  addNewBeer(e) {
    e.preventDefault()
   axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state.newBeer)
  .then(() => {
    return axios.get('http://localhost:3000/beers')
  })
  .then(allBeers => {
    this.setState({
      ...this.state,
      beers: allBeers.data
    });
  })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home></Home>;
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return <ListsBeers></ListsBeers>;
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={() => {
                return <RandomBeer></RandomBeer>
            }}
          />
          <Route
            exact
            path="/new-beer"
            render={() => {
              return <NewBeer onChange={(e) => this.writeNewBeer(e)} addNewBeer={(e) => this.addNewBeer(e)}></NewBeer>;
            }}
          />
          <Route
            path="/beers/:id"
            render={props => {
              let beerId = props.match.params.id;
              let beerFound = [...this.state.beers];
              beerFound = beerFound.filter(beer => beer._id === beerId)[0];
              return <Beer {...beerFound}></Beer>;
            }}
          />
        </Switch>
      </div>
    );
  }
}
