import React from 'react';

import './App.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

class App extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });
      });
  }

  render() {
    return <div className="App">
      <div className="container-fluid">
      <Header></Header>
        <div className="row justify-content-md-center">


     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
      </Switch>


      </div>
      {/* {JSON.stringify(this.state.beers)} */}
      </div>
      </div>
  }
}

export default App;
