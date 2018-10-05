import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import RandomBeer from './components/RandomBeers'
import NewBeer from './components/NewBeer'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
       <h2>IRONBEERS</h2>
       <ul>
         <li>
         <Link to="/">Home</Link>
         </li>
         <li>
         <Link to="/new-beer">New Beer</Link>
         </li>
         <li>
         <Link to="/random-beer">Random Beer</Link>
         </li>
         <li>
         <Link to="/all-beers">All Beers</Link>
         </li>
       </ul>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
          <Route path='/all-beers' component={AllBeers}/>
          <Route path={`/beers/:id`} component={SingleBeer}/>
        </Switch>

      </div>
      </Router>
      
    );
  }
}

export default App;
