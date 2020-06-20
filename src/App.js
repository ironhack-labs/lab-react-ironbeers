import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import BeerInfo from './components/BeerInfo'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  state = {
    beers: [],
    loading: true
  }
  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers/')
      .then( beers => this.setState({beers, loading: false}))
  }
  render(){
    return (
    <div>
      <header>
        <Nav/>
      </header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/beers" component={ListBeers}/>
        <Route path="/beer/:id" component={BeerInfo}/>
        <Route path="/new" component={NewBeer}/>
        <Route path="/random" component={RandomBeer}/>
      </Switch>
    </div>)
  }
}

export default App;