import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import api from './services/api';
import SingleBeer from './components/SingleBeer';

class App extends Component {
  state = {
    beers: [],
    NewBeer = {
      name: '',
      tagline: '',
      description: '',
      firstBrewed: '',
      brewersTips: '',
      attenuationLevel: '',
      contributedBy: ''
    }

  }

  componentDidMount() {
    api.get('/beers')
      .then((response) => {
        this.setState({ beers: response.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' render={() => { return <Beers beers={this.state.beers} /> }} />
          <Route exact path='/beers/:id' render={(props) => { return <SingleBeer {...props} beers={this.state.beers} /> }} />
          <Route exact path='/random-beer' render={() => { return <RandomBeer beers={this.state.beers} /> }} />
          <Route exact path='/new-beer' render={() => { return <NewBeer newBeer={this.state.newBeer} /> }} />
        </Switch>
      </div>
    );
  }
}

export default App;
