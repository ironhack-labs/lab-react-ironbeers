import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beer from './components/Beer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      beers: [],
    }
  }

  // componentDidMount(){
  //   axios.get("https://ih-beers-api2.herokuapp.com/beers")
  //     .then( response => {
  //       let beers = response.data;
  //       this.setState({ beers });
  //     })
  //     .catch( error => console.log(error));
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/randombeer' component={RandomBeer}/>
          <Route exact path='/newbeer' component={NewBeer}/>
          <Route exact path='/beer/:id' component={Beer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
//Home
  //Beers
    //**Search **
    //List beers
  //Random Beer
    //One random beer
  //NewBeer
    //Form POST newbeer