import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import MyNav from './components/MyNav'
import "./App.css"
import HomePage from './components/HomePage'
import { Route, Switch, withRouter } from 'react-router-dom'
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import AddBeer from './components/AddBeer'
import axios from 'axios'

class App extends Component {

  handleAdd = (e) => {
    e.preventDefault();
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = e.target;

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value
    }

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log(response.data)
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("axios post error", err)
      })
  }

  render() {
    return (
      <div>
        <MyNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:id" component={BeerDetails} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" render={() => {
            return <AddBeer onAdd={this.handleAdd} /> }} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)