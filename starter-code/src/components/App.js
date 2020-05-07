import React, { Component } from 'react'
import './App.css'
import { Switch, Route} from 'react-router-dom'
import ListBeers from './beers/ListBeers'
import RandomBeer from './randomBeer/RandomBeer'
import NewBeer from './newBeer/NewBeer.js'
import SingleBeer from './singleBeer/SingleBeer'
import Home from './home/Home'

class App extends Component {
  render() {
    return (
      <>
       
          
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/beers" render={() => <ListBeers />} />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
          <Route exact path="/beers/:id" render={() => <SingleBeer />} />
        </Switch>
       
        
      </>
    );
  }
}

export default App;
