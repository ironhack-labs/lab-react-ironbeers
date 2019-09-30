import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AllBeers from './Components/AllBeers';
import HomePage from './Components/HomePage';
import axios from 'axios'
import SingleBeer from './Components/SingleBeer';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      beerList: []
    }
  }

  componentDidMount(){

    axios.get('https://ih-beer-api.herokuapp.com/beers')
    .then(theData => {

      this.setState({
        beerList: theData.data
      })
    }).catch((err) => {
      console.log(err)
    })


  }




  render() {
    
    console.log("THE BEER DATA IS")
console.log(this.state.beerList)
    return (
      <div className="App">
 
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/beers' render={(props) => <AllBeers {...props} beerList={this.state.beerList}/> }/>
      <Route exact path='/beers/:beerId' render={(props) => <SingleBeer {...props} beerList={this.state.beerList}/> }/>
      </Switch>

      </div>
    );
  }
}

export default App;
