import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import HomePage from './pages/HomePage';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';
import axios from 'axios';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class App extends Component {
  
  state = {
    beers: '',
    error: undefined,
    status: STATUS.LOADING,
  }

  componentDidMount = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      // console.log(response.data)
      this.setState({
        beers: response.data,
        status: STATUS.LOADED,
      })
    })
    .catch((error) => {
      this.setState({
        error: error.name,
        status: STATUS.ERROR,
      })
    })
  }

  render() {
    const { error, status, beers } = this.state;

    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading...</div>
      case STATUS.LOADED:
        return <div>
                <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route exact path='/beers' render={() => <Beers beers={beers} />}/>
                  <Route path='/beers/:id' component={SingleBeer}/>
                  <Route path='/random-beer' component={RandomBeer}/>
                  <Route path='/new-beer' component={NewBeer}/>
                </Switch>
              </div>
      case STATUS.ERROR:
        return <div>{error}</div>
    }
  }
}

export default App;
