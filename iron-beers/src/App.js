import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import AllBeers from './component/allBeers/AllBeers';
import RandomBeer from './component/randomBeer/RandomBeer';
import NewBeer from './component/newBeer/NewBeer';
import NavBar from './component/navBar/NavBar';
import Main from './component/Main/Main';
import BeerDetailed from './component/beerDetailed/BeerDetailed';

import axios from 'axios';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    beerList: [],
    ready: false,
  }
}


getAllTheBeers = () => {
  axios.get(`https://sample-api-ih.herokuapp.com/`)
  .then(responseFromApi => {
    this.setState({
      beerList: responseFromApi.data,
      ready: true,
    })
  })
  .catch(err => {
    console.log(err);
  })
}

componentDidMount() {
  this.getAllTheBeers();
}


render () {

  return (
    <div className="container">
      <NavBar />
      <div className="row">
      <div className="col">
        <Switch>
          <Route exact path='/' component={Main}   />
          <Route exact path='/allbeers' render={(props) => 
          <AllBeers  {...props} beerList={this.state.beerList} ready={this.state.ready}/>}   />
          <Route exact path='/randombeers' render={(props)=> 
          <RandomBeer {...props} beerList={this.state.beerList} ready={this.state.ready}/>}   />
          <Route exact path='/beer/:id' render={(props)=> 
          <BeerDetailed {...props} beerList={this.state.beerList} ready={this.state.ready}/>}   />
          <Route exact path='/newbeer' component={NewBeer}   />
        </Switch>
        
      </div>
    </div>
   
    </div>
  );
}
}

export default App;
