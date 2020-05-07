import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './components/Main.js'
import ListBeers from './components/ListBeers'
import BeersDetails from './components/BeersDetails'
import RandomBeer from './components/RandomBeer'
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data })
        console.log(response.data)
      })
  }

  render() {
    console.log("entraaaa")
    return (
      <div className="App">
        <nav className="navbar">
          <Link to="/"> <img src="./images/casa.svg" style={{ width: "35px", height: "35px" }} alt="Home" /> </Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/beers' render={(props) => <ListBeers {...props} beers={this.state.beers} />} />
          <Route exact path='/beers/:beerId' render={(props) => <BeersDetails {...props} beers={this.state.beers} />} />
          <Route exact path='/random-beer' component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
