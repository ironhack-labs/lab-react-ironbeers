import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Beers from './components/Beers';
import Home from './components/Home'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

class App extends Component {
  state={
      beers: []
  }

  componentDidMount = async () => {
    const beers = await axios.get("https://api.punkapi.com/v2/beers")
    console.log(beers.data, 'all the beers')
    // axios devuelve un objeto con la respuesta dentro de "data"
    this.setState({ beers: beers.data})
 }

addBeerHandler = theBeer => {
  const beerCopy = [...this.state.beers]
  beerCopy.push(theBeer)
  console.log(beerCopy, 'the beers + the new beer')
  this.setState({
    beers: beerCopy
  })
}
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers/:id' render={() => <BeerDetails beers={this.state.beers}/>}/>
          <Route exact path='/random-beer' component={RandomBeer}/>
          <Route exact path='/new-beer' render={() => <NewBeer addTheBeer={this.addBeerHandler}/>}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
