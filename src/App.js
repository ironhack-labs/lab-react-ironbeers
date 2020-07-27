import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import axios from 'axios';
import Beers from './components/beers/Beers';
import Beer from './components/beers/Beer';
import NewBeer from './components/beers/NewBeer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: [] };
  }
  componentDidMount = async () => {
    const returnData = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    this.setState({ beers: returnData.data });
  };

  render() {
    console.log(this.state);
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers">
          <Beers beers={this.state.beers} />
        </Route>
        <Route
          path="/beers/:id"
          component={(props) => <Beer {...props} beers={this.state.beers} />}
        />
        <Route
          path="/random-beer"
          component={(props) => <Beer {...props} beers={this.state.beers} />}
        />
        <Route path="/new-beer" component={NewBeer}></Route>
      </Switch>
    );
  }
}

export default App;
