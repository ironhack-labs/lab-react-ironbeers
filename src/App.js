import React, {Component} from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom';

import AllBeers from './components/services/pages/Beers/AllBeers';
import RandomBeer from './components/services/pages/Beers/RandomBeer';



class App extends Component {
  render(){
      return (

              <div className="App">
                <Switch>
                  <Route path="/" exact render={()=> <Home/>}/>
                  <Route path="beers" render = {()=> <AllBeers/>}/>
                  <Route path="/randomBeers" render = {()=> <RandomBeer/>}/>
                </Switch>                
              </div>
      )
  }

  }

export default App;
