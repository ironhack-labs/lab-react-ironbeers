import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import axios from 'axios';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = { beers: [] };

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(response => {
        console.log(response.data);
        const beers = response.data;
        this.setState({ beers });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" render={_ => <Beers beers={this.state.beers} />} />
          {/* <Route path="/beers/:beerId" component={SingleBeer} /> */}
          <Route path="/beers/:beerId" render={_ => <SingleBeer beers={this.state.beers} />} />
          <Route path="/random-beer" />
          <Route path="/new-beer" />
        </Switch>
      </div>
    );
  }
}

export default App;
