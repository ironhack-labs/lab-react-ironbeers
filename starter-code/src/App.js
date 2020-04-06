import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'; 
import './App.css';


import IronbeerHome from './components/ironbeer-home';
import Beers from './components/beers';
import RandomBeer from './components/random-beer';
import BeerDetail from './components/beer-detail';
import AddBeer from './components/add-beer';
import AddBeerWithImg from './components/add-beer-with-image';
import Signup from './components/signup';
import Login from './components/login';
import Logout from './components/logout';
import Profile from './components/profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={IronbeerHome} />
          <Route path='/beers' component={Beers}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/beer-detail/:id' component={BeerDetail}/>
          <Route path='/add-beer' component={AddBeer}/>
          <Route path='/add-beer-with-image' component={AddBeerWithImg}/>
          <Route path='/user/signup' component={Signup}/>
          <Route path='/user/login' component={Login}/>
          <Route path='/user/logout' component={Logout}/>
          <Route path='/user/profile' component={Profile}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
