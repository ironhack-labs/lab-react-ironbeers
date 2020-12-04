import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment  } from 'react'
import Home from './components/Home.js'
import Header from './components/Header.js'
import Beers from './components/Beers.js'
import BeerDetail from './components/BeerDetail.js'
import RandomBeer from './components/RandomBeer.js'
import NewBeer from './components/NewBeer.js'
import { Route, Switch} from 'react-router-dom';

//root api
//https://ih-beers-api2.herokuapp.com/beers


export default class App extends Component {



  render() {
    return (
      <div className="App">
        
        <Switch>
        <Route exact path="/" component={Home}/>
        <Fragment> 
        <Header />
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random" component={RandomBeer}/>
        <Route exact path="/beers/:id" component={BeerDetail}/>
        <Route exact path="/new-beer" component={NewBeer}/>
        </Fragment>
        </Switch>
      </div>
    )
  }
}
