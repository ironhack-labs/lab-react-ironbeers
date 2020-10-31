import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import axios from 'axios'
import Beers from './components/Beers/Beers';
import {Route, Switch} from 'react-router-dom';
import SingleBeer from './components/Singlebeer/SingleBeer';
import RandomBeer from './components/Randombeer/RandomBeer';
import NewBeer from './components/Newbeer/NewBeer';

export default class App extends Component {

state = {
  beers: [],
  randomBeer: [],
}

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      // console.log(response)
      this.setState({
        beers: response.data
      })
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        // console.log(response)
        this.setState({
          randomBeer: response.data
        })
      })
    })
  }

  searchHandler= (e) => {
    let searchValue = e.target.value.toLowerCase()
    // console.log(searchValue)
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchValue}`)
    .then(response => {
      this.setState({
        beers: response.data
      })
    })
  }

  render() {
    if(this.state.beers && this.state.beers.length < 1)  {
      return <h1>loading</h1>
    }
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" render={(props) => <Beers  beers={this.state.beers} onSearch={this.searchHandler} {...props}/>} />
        <Route exact path="/beers/:id" render={(props) => <SingleBeer beers={this.state.beers} {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer randomBeer={this.state.randomBeer} {...props} />} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
      </div>
    )
  }
}
