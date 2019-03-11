import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AllBeerska from './components/AllBeers.js';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RandomBeerka from './components/RandomBeer.js'
import { Switch, Route } from 'react-router-dom';
import AddBeerka from './components/AddBeer'

class App extends Component {







  render() {
    
    return (
      <div className="App">
        <NavBar/>

       <Switch>
         <Route exact path="/Home" component={Home}/>
         <Route exact path="/AllBeers" component={AllBeerska}/>
         <Route exact path="/RandomBeer" component={RandomBeerka}/>
         <Route exact path="/new-beer" component={AddBeerka}/>
       </Switch> 


      </div>
    );
  }
}

export default App;
