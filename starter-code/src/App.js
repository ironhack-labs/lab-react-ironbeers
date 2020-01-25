import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allBeers: [],
      randomBeer: {},
    };

    this.getRandomBeer = this.getRandomBeer.bind(this);
  }

  componentDidMount() {
    const IronBeers = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    });

    IronBeers.get('/')
      .then(allBeers => {
        let allBeersData = allBeers.data;
        this.setState({
          allBeers: allBeersData,
        });
      })
      .catch(err => console.log('Error getting all beers', err));
  }

  getRandomBeer() {
    const IronBeers = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    });

    IronBeers.get('/random')
      .then(randomBeer => {
        let randomBeerData = randomBeer.data;
        this.setState({
          randomBeer: randomBeerData,
        });
      })
      .catch(err => console.log('Error getting all beers', err));
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/beers' component={ ListBeers } />
          <Route exact path='/random-beer' render={(props) => <SingleBeer isRandom getRandom={this.getRandomBeer} randomBeer={this.state.randomBeer} {...props} /> } />
          <Route exact path='/new-beer' component={ NewBeer } />
        </Switch>
      </div>
    );
  }
}

export default App;
