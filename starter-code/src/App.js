import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import ChosenBeer from './ChosenBeer'
import './App.css'
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      beers: [],
      randomBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        this.setState({ beers: response.data })
      })

      
  }

  render() {
    console.log(this.state.randomBeer)
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <React.Fragment>
                  <Link to={"/beers"}>Beers</Link>
                  <Link to={"/random-beer"}>Random Beer</Link>
                  <Link to={"/new-beer"}>New Beer</Link>
                </React.Fragment>

              )
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return (<Beers></Beers>)
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={() => {
              return (<RandomBeer></RandomBeer>)
            }}
          />
          <Route
            exact
            path="/new-beer"
            render={() => {
              return (<NewBeer></NewBeer>)
            }}
          />
          <Route
            exact
            path="/:id"
            render={(props) => {
              let chosenBeer = props.match.params.id
              return (<ChosenBeer beerSent={this.state.beers.find(beer => beer._id === chosenBeer)}></ChosenBeer>)
            }}
          />
        
        </Switch>
      </React.Fragment>

    );
  }
}

export default App;
