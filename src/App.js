import React from 'react';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import RandomBeers from './components/RandomBeers'
import NewBeer from './components/NewBeer';
import AllBeers from './components/AllBeers';
import axios from 'axios'


export default class App extends React.Component {
  state= {
    beers: []
  }
  

  handleAddNewBeer = (e) => {
    e.preventDefault()
    let name = e.target.name.value
    let tagline = e.target.tagline.value
    let description = e.target.description.value
    let first_brewed = e.target.first_brewed.value
    let brewers_tips = e.target.brewers_tips.value
    let attenuation_level = e.target.attenuation_level.value
    let contributed_by = e.target.contributed_by.value
    let image_url = "https://images.punkapi.com/v2/keg.png"

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name,
      description: description,
      tagline: tagline,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
      image_url: image_url
    })
    .then((res) => {
      this.setState({
        beers: [...this.state.beers, res.data]
      }, () => {
        this.props.history.push('/all-beers') //redirecting user to different paths
      })
    })
  }

  render() {
    return (
      <>
        <Nav />
        <h1 style={{textAlign:"center"}}>Iron Beers</h1>
        <Switch>
          <Route exact path="/" />
          <Route path="/all-beers" component={AllBeers} />
          <Route path="/random-beers" component={RandomBeers} />
          <Route path="/new-beer" render={() => {
          return <NewBeer onAdd={this.handleAddBeer} />
        }}/>
        </Switch>
      </>

    );
  }
}

