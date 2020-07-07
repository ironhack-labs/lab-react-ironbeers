import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import OneBeer from './components/OneBeer'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    beers: []
}

  async componentDidMount() {
    let res = await axios.get ('https://ih-beers-api2.herokuapp.com/beers')
      // console.log(res)

      this.setState({
          beers: res.data

      })
  }


  render() {
    return (
      <div>

        <Link to= '/'>Home</Link>
        <Link to= '/all-beers'>All Beers</Link>
        <Link to= '/random-beer'>Random Beer</Link>
        <Link to= '/new-beer'>New Beers</Link>


        <Switch>
          <Route exact path='/all-beers' render={() => <AllBeers beers= {this.state.beers} /> } />
          <Route exact path='/random-beer' render={() => <RandomBeer /> } />
          <Route exact path='/new-beer' render={() => <NewBeer /> } />
          <Route exact path='/beers/:beerid' render={(props) => <OneBeer {...props} beers = {this.state.beers} /> } />
        </Switch>
        
      </div>
    );
  }
}

export default App;