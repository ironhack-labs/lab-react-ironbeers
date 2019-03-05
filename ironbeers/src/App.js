import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route , Redirect } from 'react-router-dom';
import Navbar from './components/NavBar';
import Beers from './components/Beers';
import NewBeers from './components/NewBeers';
import RandomBeers from './components/RandomBeers';
import Home from './components/Home';

class App extends Component {

  state = {
    isHome: true
  }

  

  render() {
    const { isHome } = this.state
    return (
      <div className="App">
        <Navbar isHome={isHome} />
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/beers' component={Beers}/>
              <Route path='/new-beers' component={NewBeers}/>
              <Route path='/random-beers' component={RandomBeers}/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
