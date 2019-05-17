import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers'
import NewBeer from './components/NewBeer'
import Random from './components/Random'
import BeerDetails from './components/BeerDetails';


class App extends Component {


  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers').then(beers => {
      this.setState({
        beers: beers.data
      })
    })
  }

  render() {
    return (
      <Fragment>

        <Navbar />
        <div className="conatiner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={(props) => { return <Beers {...props} beers={this.state.beers} /> }} />
            <Route exact path='/new-beer' component={NewBeer} />
            <Route exact path='/random-beer' component={Random} />
            <Route exact path='/beers/:id' component={(props) => { return <BeerDetails {...props} beers={this.state.beers} /> }} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
