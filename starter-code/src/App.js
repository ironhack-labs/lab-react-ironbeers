import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import api from './services/api';

class App extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    api.get('/beers')
      .then((response) => {        
        this.setState({ beers: response.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' render={() => { return <Beers beers={this.state.beers} /> }} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeer} />



        </Switch>







      </div>
    );
  }
}

export default App;
