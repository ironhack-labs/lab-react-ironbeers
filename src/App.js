import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import SingleBeer from './components/SingleBeer/SingleBeer';
import RandomBeers from './components/RandomBeer/RandomBeer';

import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  state = {
    beers: [],
  }

  // loadBeers() {
  //   this.setState({beers: res});

  // }

  render() {
    return(
      <div>
        <Switch>
          {/* <Route exact path="/detail/:country" render={(routeProps) => <CountryDetails {...routeProps} countries={this.state.countries} />} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} beers={this.state.beers} />
          <Route exact path="/singlebeer/:beer" render={(routeProps) => <SingleBeer {...routeProps} beers={this.state.beers} />} />
          <Route exact path="/random-beer" component={RandomBeers} />
        </Switch>    
      </div>
    );
  }
}

export default App;
