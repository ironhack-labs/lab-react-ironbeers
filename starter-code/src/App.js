import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Beers from './Beers'
import Random from './Random'
import NewBeer from './NewBeer'
import HomePage from './HomePage'
import SingleBeer from './SingleBeer'



class App extends Component {


  render() {
    return (
      <>

       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/beers" render ={() => <Beers/> } /> 
       <Route exact path="/random-beer" component={Random}/>
       <Route exact path="/new-beer" component={NewBeer}/>
       <Route exact path="/beers/:beerId" component={SingleBeer}/>
      </Switch>

      </>
    );
  }
}

export default App;
