import React, { Component } from 'react'
import {Switch , Route, withRouter} from 'react-router-dom'
import axios from 'axios' 
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
//import NewBeer from './components/NewBeer'
import Header from './components/Header'
import BeerDetail from './components/BeerDetail'
import NewBeer from './components/NewBeer'

class App extends Component {

  state = {
    beers: []
  }

  handleAdd = (e) => {
    e.preventDefault()
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = e.target

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value
    }

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        this.setState({
          beers: [response.data, ...this.state.beers]
        }, () => {
          this.props.history.push('/')
        })
      })
  }

  render() {
    
    return (
      <div>   
        <h2>HARDCODED in App.js - just for testing</h2>
        
        <Switch>
          <Route exact path='/' render={() => {
            return <Home />
          }} />
          <Route path='/beers' render={() => {
            return (<div><Header /><AllBeers /></div>)
          }} />
          <Route path='/beer/:beerId' render={(routeProps) => {
            return (<div><BeerDetail {...routeProps} /></div>)
          }} />

          <Route path='/random-beer' component={RandomBeer}/>

          <Route path='/NewBeer' render={(routeProps) => {
            return (<div><Header /><NewBeer onAdd={this.handleAdd} {...routeProps} /></div>)
          }} />
        </Switch>
         
        
      </div>
    )
  }
}

export default withRouter(App)
