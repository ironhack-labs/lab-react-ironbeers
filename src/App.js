import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SingleBeer from './components/SingleBeer';

class App extends Component {
  // state = {
  //   beers: [],
  // };

  // componentDidMount() {
  //   axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
  //     console.log(response);
  //     this.setState({
  //       beers: response.data,
  //     });
  //   });
  // }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beer/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
