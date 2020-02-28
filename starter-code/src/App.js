import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home/Home.js';
import ListOfBeers from './ListOfBeers/ListOfBeers.js'
import OneBeer from './OneBeer/OneBeer.js'
import Nav from './Nav/Nav.js';
import RandomBeer from './RandomBeer/RandomBeer.js'
import axios from 'axios';


class App extends Component {

  state = {
    listofBeers: []
  }

  componentDidMount = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(responseFromApi => {
        this.setState({
          listofBeers: responseFromApi.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/Beers"
            render={_ => {

              return (
                <div>
                  <Nav></Nav>
                  <ListOfBeers beers={this.state.listofBeers}></ListOfBeers>
                </div>
              );
            }}
          />
          <Route
            exact
            path="/Beers/:id"
            render={props => {
              let newList = [...this.state.listofBeers]
              newList = newList.filter(beer => beer._id === props.match.params.id)
              return (
                <div>
                  <Nav></Nav>
                <OneBeer beers={newList}></OneBeer>
                </div>
              );
            }}
          />
        <Route
            exact
            path="/RandomBeers"
            render={_ => {
              return (
                <div>
                  <Nav></Nav>
                  <RandomBeer></RandomBeer>
                </div>
              );
            }}
          />
        </Switch>
      </div>

    );
  }
}

export default App;




