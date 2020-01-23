import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Beers from './components/beers';
import RandomBeer from './components/randombeer';
import OneBeer from './components/onebeer';
import NewBeer from './components/newbeer';
import { Route, Switch } from 'react-router-dom';
class App extends Component {

  state = {
    name: null
  }

  changeState = (name, value) => {
    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/beers' component={ Beers }/>
          <Route path='/randombeer' component={ RandomBeer }/>
          <Route path='/onebeer/:id' component={ OneBeer }/>
          <Route path='/newbeer' render={ () => <NewBeer name={this.changeState}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
