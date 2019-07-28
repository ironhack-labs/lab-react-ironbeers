import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/home/Home'
import Beers from './components/beers/Beers';
import Random from './components/random/Random';
import Create from './components/create/Create';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ready: false,
      newBeer: {
        'name': '',
        'tageline': '',
        'description': '',
        'first_brewed': '',
        'brewers_tips': '',
        'attenuation_level': 0,
        'contributed_by': ''
      }
    };
  }

  componentDidMount(){
    axios.get("https://sample-api-ih.herokuapp.com")
    .then( (beers) => {
        this.getIronBeers(beers.data);
    })
    .catch( (error) => {
      console.log(error);
    })
  }

  createBeer = (e)=>{
    e.preventDefault();
    console.log(this.state.newBeer);
    axios.post("https://sample-api-ih.herokuapp.com/new", this.state.newBeer)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  getIronBeers = (beers)=>{
    let newBeers = beers.sort();
    this.setState({beers: newBeers, ready: true});
  }

  getInputs = (e)=>{
    let attribute = e.target.name;
    let value = e.target.value;
    let newBeer = {...this.state.newBeer};

    newBeer[attribute] = value;

    this.setState({newBeer: newBeer});
  }

  render() {
    return (
      <div>
        <Home/>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/beers' render={(props)=>
            <Beers  {...props} beers={this.state.beers} ready={this.state.ready}/>
          }/>
          <Route exact path='/randomBeers' render={(props)=>
            <Random {...props} beers={this.state.beers} ready={this.state.ready}/>
          }/>
          <Route exact path='/createBeers' render={(props)=>
            <Create {...props} beers={this.state.beers} change={(e)=>{this.getInputs(e)}} create={(e)=>{this.createBeer(e)}} ready={this.state.ready}/>
          }/>
        </Switch>
      </div>
    )
  }
}
