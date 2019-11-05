import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './components/Beers'
import Random_Beer from './components/Random_Beer'
import New_Beer from './components/New_Beer'
import { Switch, Route, Link } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Switch> */}
        <Link to={`/beers`} >Beers</Link>
        <Route path="/beers" component={Beers} />
        <Link to={`/random-beer`} >Random_Beer</Link>
        <Route path="/random-beer" component={Random_Beer} />
        <Link to={`/new-beer`} >New_Beer</Link>
        <Route path="/new-beer" component={New_Beer} />
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
