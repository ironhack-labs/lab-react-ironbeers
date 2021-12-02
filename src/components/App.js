import React, {Component} from 'react';
import './App.css';
import Home from './Home'
import ListBeers from './ListBeers'
import RandomBeer from './RandomBeer'
import SingleBeer from './SingleBeer';
import { Switch, Route } from 'react-router-dom'
import ServiceBeers from '../service/serviceBeers';

class App extends Component {

  constructor() {
    super()

    this.state = {
      beers: []
    }

    this.service = new ServiceBeers()
  }

  componentDidMount() {
    this.service.getAllBeers().then((api) => {
      this.setState({ beers: api.data });
    });
}

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" exact render={() => <ListBeers beers={this.state.beers}/>} />
          <Route path="/random-beer" render={() => <RandomBeer />} />
          <Route path="/beers/:id" render={(props) => <SingleBeer {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default App;
