import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import BeerForm from './components/BeerForm'
import BeerList from './components/BeerList'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
    this.getRandom = this.getRandom.bind(this)
    this.getOne = this.getOne.bind(this)
    this.state = {
      beerList: [],
      singleBeer: {},
      randomBeer: {},
    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
      .then((response) => {
        this.setState({ beerList: response.data.slice(0, 40) })
      })
  }

  getOne(id) {
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
      .then((response) => {
        this.setState({ singleBeer: response.data })
      })
  }

  getRandom() {
    axios.get("https://ih-beer-api.herokuapp.com/beers/random")
      .then((response) => {
        this.setState({ randomBeer: response.data })
      })
  }

  createNew(input) {
    axios.post("https://ih-beer-api.herokuapp.com/beers/new", input)
    .then((response) => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          < Header />
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' render={() => <BeerList beers={this.state.beerList} />} />
          <Route exact path='/random-beer' render={() => <RandomBeer getRandom={this.getRandom} randomBeer={this.state.randomBeer} />} />
          <Route exact path='/new-beer' render={() => <BeerForm createNew={this.createNew} />} />
          <Route exact path='/beer/:id' render={(props) => <SingleBeer getOne={this.getOne} singleBeer={this.state.singleBeer} {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
