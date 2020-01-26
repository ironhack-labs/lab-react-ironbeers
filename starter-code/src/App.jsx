import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/beers';
import RandomBeer from './components/random-beer';
import NewBeer from './components/new-beer';
import { render } from 'react-dom';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
    console.log(this.beers)
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        this.setState({ beers: response.data })
      })
  }

  render() {
    return (

      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beers' component={AllBeers} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/new-beer' component={NewBeer} />
        </Switch>
      </div>
    )
  }
}

export default App;
