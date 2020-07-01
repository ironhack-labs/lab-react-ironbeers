import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';


class App extends Component {

  state = {
    beers: [],
    random:[],
    singleBeer:[],
    search:''
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=> {
      console.log(response)
      this.setState({beers: response.data})
    });

  }

  componentDidUpdate(){
    console.log('Component did update');

  }

  render(){
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" render={(props) => <AllBeers {...props} allBeersFromAPI={this.state.beers} />} />
          <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} randomBeer={this.state.random} />} />
          <Route exact path="/new-beer" component={NewBeer}  />
          <Route exact path="/beers/:beerId" component={SingleBeer} />
        </Switch>

      </div>
    );
  }
}

export default App;
