import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Home from './home';
import {Link, Route, Switch} from 'react-router-dom'
import All from './All'
import Random from './beer'
import Beer from './beer'
import NewBeer from './newBeer'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      beers: [],
      gotten: false,
    }
  }

  getBeers = () =>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(res => {
        this.setState({
          beers: res.data
        })
      })
      this.setState({
        gotten:true
      })
  }  
  componentDidMount(){
    if(!this.state.gotten){
      this.getBeers()
    }
  }

  render() {
    
    console.log('hello')
    return (
      <div className="App">

        <div className="navbar navbar-default navbar-fixed-top">
            <Link to={'/'} className="home-container">
                <img src={require('./images/home.png')} className="home-img" alt="all"/>
            </Link>
        </div>


        <Switch>


          <Route exact path="/" render ={props => 
          <Home 
          {...props}
          beers = {this.state.beers}
            /> } />

          <Route exact path="/newbeer" render ={props => 
          <NewBeer
          {...props}
          beers = {this.state.beers}
            /> } />


          <Route exact path="/all" render ={ props => 
          <All
          {...props}
          beers = {this.state.beers}
            /> } />


          <Route exact path="/random" render ={ props => 
          <Random
          {...props}
          beers = {this.state.beers}
            /> } />

          <Route exact path="/beer/:id" render ={ props => 
          <Beer
          {...props}
          beers = {this.state.beers}
            /> } />

          <Route exact path="/beer/:id" render ={ props => 
          <Random
          {...props}
          beers = {this.state.beers}
            /> } />

        </Switch> 







      </div>
    );
  }
}

export default App;
