import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import Home from './components/Home';

import axios from 'axios';

// we can load the beers in App????

class App extends Component {

  constructor(props){
    super(props);
    this._getRandomBeer=this._getRandomBeer.bind(this);
    this._getBeers=this._getBeers.bind(this);
    this._getBeerById=this._getBeerById.bind(this);
    this.state={};
  }

  // when App starts we need to load the beers
  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response)=>{
            let beers=response.data;
            console.log("Number of beers: "+beers.length+".");
            this.setState({
                beers:beers
            });
        })
        .catch((error)=>{
            this.setState({error:error});
        });
  }

  _getBeerById(id){
    console.log("Looking for the beer with id "+id+".");
    for(let beerIndex in this.state.beers){
      let beer=this.state.beers[beerIndex];
      // console.log("Looking for the beer with id "+id+" in ",beer);
      if(beer._id===id)return beer;
    }
    return null;
  }

  _getBeerInfo(beer){
    let beerInfo=(({name,image_url,tagline,contributed_by})=>({name,image_url,tagline,contributed_by}))(beer);
    beerInfo.key=beer._id; // store _id in the key
    return beerInfo;
  }

  _getRandomBeer(){
    return this.state.beers[Math.floor(this.state.beers.length*Math.random())];
  }
  _getBeers(){
    // source: https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
    return this.state.beers.map((beer)=>this._getBeerInfo(beer));
  }

  _addBeer(beer){
    console.log("Supposed to add beer",beer);
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new",beer)
    .then((response)=>{
      console.log("Response",response);
      if(response.status===200)
        alert("Your beer "+beer.name+" was added succeessfully!");
      else
        alert("Status of adding the beer: "+response.status+".");
    })
    .catch((error)=>{
      console.error("Beer post error",error);
    });
  }

  render(){
    if(this.state.hasOwnProperty("error"))
      return(<h2>ERROR: {this.state.error}. Try a reload!</h2>);
    if(!this.state.hasOwnProperty("beers"))
      return <h1>Loading beers...</h1>;
    // we've got beers to show
    return(
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/all-beers/" exact 
            render={
              (props)=><AllBeers {...props} getBeers={this._getBeers} getBeerById={this._getBeerById}/>
            }
          />
          <Route path="/random-beer/" exact
            render={
              (props)=><RandomBeer {...props} getBeer={this._getRandomBeer}/>
            }
          />
          <Route path="/new-beer/" exact 
            render={
              (props)=><NewBeer {...props} addBeer={this._addBeer}/>
            }
          />
          <Route path="/beer/:id" exact 
            render={
              (props)=><SingleBeer {...props} getBeerById={this._getBeerById}/>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
