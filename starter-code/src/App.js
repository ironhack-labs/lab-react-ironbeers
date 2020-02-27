import React, { Component } from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import HomePage from './HomePage/HomePage'
import Beers from './Beers/Beers';
import Random from './Random/Random';
import New from './New/New';

class App extends Component {

  state = {
    beers: []
  }


  componentDidMount(){

    axios.get('https://ih-beers-api2.herokuapp.com/beers').then(resp => resp.data)
    .then((AllBeers) => {
      this.setState({ beers: AllBeers})
    });

  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route 
          exact path='/beers' 
          render={_ => {
            return(
              <Beers beers={this.state.beers}></Beers>
            )
          }} 
          
          />
          <Route path='/random' component={Random}/>
          <Route path='/new' component={New}/>
        </Switch>
      </div>
    );
  }
}

export default App;
