import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import AllBeers from './pages/AllBeersPage';
// import RandomBeer from './pages/RandomBeer';
import beerDetails from './pages/BeerDetailPage';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import AddBeer from './pages/AddBeerPage';
import Signup from './pages/Signup';
import Login from './pages/LoginPage';
import Profile from './pages/Profile';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/beers" component={NavBar}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        
        <Switch>       
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/beers/all" component={AllBeers}/>
            {/* <Route path="/beers/random" component={RandomBeer}/>*/}
            <Route exact path="/beers/new" component={AddBeer} />
            <Route exact path="/beers/:beerId" component={beerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
