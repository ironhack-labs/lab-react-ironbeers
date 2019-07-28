import React from 'react';
import './App.css';
import axios from 'axios';
import List from './components/list/List';
import Nav from './components/nav/Nav';
import addBeer from './components/add/addBeer';
import Beers from './components/beers/Beers';
import Randombeer from './components/random/Randombeer';
import SingleBeer from './components/singleBeer/SingleBeer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      theBeers: [],
      ready:false,
      beer: {}
     }
  }

  allBeers = () => {
    axios.get(`https://sample-api-ih.herokuapp.com/`)
    .then(res => {
      
      this.setState({
        theBeers: res.data,
        ready:true,
      })
    }).catch((err)=>{
        console.log(err);
    })
  }

  componentDidMount() {
    
      this.allBeers();
  }

  getBeerInfo = (beer) => {
    this.setState({
      beer
    })
  }


render(){
  return (
    <div>

<Nav />

<Route exact path='/addBeer' component={addBeer} />

<Route exact path ='/Beers' render = {(props)=> <Beers {...this.props} allBeers={this.state.theBeers} /> }/>

<Route exact path = '/Randombeer' render={(props) => <Randombeer {...props} beer={this.state.beer} getBeerInfo={this.getBeerInfo} />} />

<Route exact path = '/SingleBeer/:idOfBeer' render = {(props)=> <SingleBeer {...props} ready={this.state.ready} Singles={this.state.theBeers} beer={this.state.beer} /> }/>



    </div>


  );
}
}

