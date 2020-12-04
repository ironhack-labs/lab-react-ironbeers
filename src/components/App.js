import { Component, React } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import './App.css'
import Home from './home-page/Home'
import Beers from './Beers'
import BeerDetails from './BeerDetails'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      randomBeer: {}
    }
  }

  componentDidMount = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => this.setState({ beers: res.data }))
    
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(res => this.setState({ randomBeer: res.data }))
    
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" render={() => <Beers beers={this.state.beers} />} />
          <Route path="/random-beer" render={() => <RandomBeer randomBeer={this.state.randomBeer} />} />
          <Route path="/new-beer" render={() => <NewBeer beers={this.state.beers} />} />
          <Route path="/:id" exact render={props => <BeerDetails {...props} beer={this.state.beers} />} />
        </Switch>
      </>
    )
  }
}

export default App
