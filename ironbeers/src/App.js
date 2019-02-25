import React, { Component } from 'react';
import './App.css';
import { Link,Switch,Route } from 'react-router-dom';
import RandomBeer from './beers/RandomBeer'
import AllBeer from './beers/AllBeer'
import NewBeer from './beers/NewBeer'
import Home from './home/Home'

class App extends Component {
  

  state = {
    home: false
  }

  render() {
    return (
      <div className="App">
      <ul className="menu">
      <li> <Link to='/home'>Home</Link></li>
      <li><Link to='/beers'>Beers</Link></li>
      <li><Link to="/random-beer">Random beer</Link></li>
      <li><Link to="/new-beer">New beer</Link></li>
      </ul>



      <Switch>
      <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/random-beer"} component={RandomBeer}/>
        <Route exact path={"/beers"} component={AllBeer}/>
        <Route exact path={"/new-beer"} component={NewBeer}/>
        
      </Switch>     
      </div>
   
    );
  }
}

export default App;
