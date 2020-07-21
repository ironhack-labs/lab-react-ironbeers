import React, { Component , Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer.js';
import Header from './components/Header.js';
import EachBeer from './components/EachBeer.js';
import SearchBeer from './components/SearchBeer.js';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    beerList: [],
  };
async componentDidMount() {let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');this.setState({beerList: res.data,});}
render() {
    return (
      <div className="App">
        <Header />
        <Link to="/all-beers">All beers</Link>
        <br />
        <Link to="/random-beer">Random beer</Link>
        <br />
        <Link to="/new-beer">New beer</Link>
        <Switch>
          <Route exact path="/all-beers" render={() => <AllBeers beerList={this.state.beerList} />} />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
          <Route exact path="/all-beers/:id" component={EachBeer} />
          <Route exact path="/search-beer" component={SearchBeer} />
        </Switch>
      </div>
    );
  }
}

