import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import axios from 'axios';

import { Switch, Route, withRouter } from 'react-router-dom';

class App extends Component {
  state = { beers: [], refetch: false };

  componentDidMount() {
    this.fetchBeers();
  }

  componentDidUpdate() {
    this.state.refetch && this.fetchBeers();
  }

  fetchBeers = _ => {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(response => {
        console.log(response.data);
        const beers = response.data;
        this.setState({ beers, refetch: false });
      })
      .catch(error => console.log(error));
  };

  addBeer = async formData => {
    await axios.post('https://ih-beer-api.herokuapp.com/beers/new', formData);
    this.setState({ refetch: true });
    this.props.history.push('/beers');
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" render={_ => <Beers beers={this.state.beers} />} />
          <Route path="/beers/:beerId" render={_ => <SingleBeer beers={this.state.beers} />} />
          <Route path="/random-beer" render={_ => <RandomBeer beers={this.state.beers} />} />
          <Route path="/new-beer" render={_ => <NewBeer addBeer={this.addBeer} />} />
        </Switch>
        {/* <NewBeer addBeer={this.addBeer} /> */}
      </div>
    );
  }
}

export default withRouter(App);
