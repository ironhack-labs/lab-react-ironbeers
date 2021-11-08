import React from 'react';
import './App.css';
import Home from './Component/Home'
import BeersList from './Component/BeersList'
import RandomBeer from './Component/RandomBeer'
import NewBeer from './Component/NewBeer'

import {Redirect, Route, Switch} from 'react-router-dom'



class App extends React.Component{
  render(){

    return (
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/beerslist" component={BeersList}/>
            <Route exact path="/randombeer" component={RandomBeer}/>
            <Route exact path="/newbeer" component={NewBeer}/>

          </Switch>
        </div>
    );
  }
}

export default App;
