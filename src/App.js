// import React from 'react';
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Beers from './components/Beers.jsx';
import RandomBeer from './components/RandomBeer.jsx';
import NewBeer from './components/NewBeer.jsx';
import BeerInfo from './components/BeerInfo.jsx';
import Beer from './components/Beer.jsx';


export default class App extends Component {
  
  state = {
    beers: []
  }

  componentDidMount = () => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      this.setState({ beers: result });
    })
    .catch((e) => console.log(e));
  }
  
  render() {
  return (
    <div>
      <header>
        <h1>IronBeers!</h1>
        <Link to="/beers">Beers |</Link> 
        <Link to="/randombeer">Random beer |</Link> 
        <Link to='/newbeer'>New beer</Link>
      </header>
    <Switch>
      <Route exact path = '/beers'><Beers beers={this.state.beers}/></Route>
      <Route path = '/randombeer'><RandomBeer/></Route>
    

      <Route exact path='/newbeer' component={NewBeer}/>
      {/* above and below are two ways for the same process */}
      <Route path = '/beers/:id'>
        {(props)=><BeerInfo {...props} beers={this.state.beers} />}
      </Route>
    </Switch>
    
    </div>
  )
}
}