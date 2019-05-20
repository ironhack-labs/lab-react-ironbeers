import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Home'
import BeersList from './BeersList'
import Beer from './Beer'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar />
        <Switch> */}
        {/* <Route exact path='/' component={NavBar} />  */}
        <Route exact path='/' component={Home} /> 
        <Route exact path='/beers' component={BeersList} /> 
        <Route exact path='/beers/:id' component={Beer} /> 
        <Route exact path='/random-beer' component={RandomBeer} /> 
        <Route exact path='/new-beer' component={NewBeer} /> 
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
