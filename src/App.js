import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers'

import axios from 'axios'
import RandBeer from './components/RandBeer';
import AddBeer from './components/AddBeer';
import Home from './components/Home';


class App extends Component {
  state= {
    beers: []
  }
  
  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response=>{
      console.log(response.data)
      this.setState({
        beers: response.data
      })
    })
  }
  
  // const Home=()=>{
  //   <div>

  //   </div>
  // }
  
  render() {
    return (
      <div>
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  path='/allBeers' component={AllBeers}/>
          <Route  path='/randBeer' component={RandBeer}/>
          <Route  path='/addBeer' component={AddBeer}/>
        </Switch>
      </div>
    );
  }

}//end class

export default App;
