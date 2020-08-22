import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {Switch, Route,withRouter} from 'react-router-dom';
import axios from 'axios';

//#region Components
import BeersList from './components/BeersList';
import Beer from './components/Beer';
import NavHome from './components/NavHome';
import RandomBeer from './components/RandomBeer';
import NewBeer  from './components/NewBeer';
//#endregion Components

import {API_URL} from './config';

class App extends Component{
  
  state = {
    beers: [],
    beersFiltered : []
  }
  componentDidMount(){
    axios.get(`${API_URL}/beers`)
      .then((res)=>{
        this.setState({
          beers: res.data,
          beersFiltered: res.data
        })
      })
  }
  handleNewBeer = (e) =>{
    e.preventDefault();
    const {name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by} = e.currentTarget;
    const theNewBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value
    }
    axios.post(`${API_URL}/beers/new`, theNewBeer)
      .then((res)=>{
        let beersClone = JSON.parse(JSON.stringify(this.state.beers));
        beersClone.unshift(theNewBeer);
        this.setState({
          beers: beersClone,
          beersFiltered: beersClone
        },()=>{
          this.props.history.push('/')
        })
      })
  }
  handleBeerFilter = (e) =>{
    const query = e.currentTarget.value;
    axios.get(`${API_URL}/beers/search?q=${query}`)
      .then((res)=>{
        this.setState({
          beersFiltered: res.data
        })
      })
  }
  render(){
    return (
      <div className="myApp">
        <Switch>
          <Route exact path='/' render={()=>{
            return <BeersList beers = {this.state.beersFiltered} onFilter = {this.handleBeerFilter}/>
          }}/>
          <Route path='/random' component ={RandomBeer}/>
          <Route path='/home' component ={NavHome}/>
          <Route path='/new' render={(routerProps)=>{
            return <NewBeer onAdd={this.handleNewBeer} {...routerProps}/>
          }}/>
          <Route path='/beer/:id' render={(routerProps)=>{
            return <Beer beers = {this.state.beers} {...routerProps}/>
          }}/>
          
        </Switch>
      </div>
    );
  }
}

export default withRouter(App) 
