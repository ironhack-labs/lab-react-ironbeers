import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Beers from './components/Beers'
import Beer from './components/Beer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import {withRouter} from 'react-router-dom'


class App extends React.Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/')
      .then((res) => {
        console.log(res)
        this.setState({
          beers: res.data
        })
      })
  }

  handleAddBeer = (event) => {
    event.preventDefault();
    let name = event.target.name.value
    let tagline = event.target.tagline.value
    let description = event.target.description.value
    let firstBrewed = event.target.firstBrewed.value
    let brewerTips = event.target.brewerTips.value
    let attenuation = event.target.attenuation.value
    let contributed = event.target.contributed.value
    
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewer_tips: brewerTips,
      attentuation_level: attenuation,
      contributed_by: contributed
    })
      .then((res) => {
        let newBeers = JSON.parse(JSON.stringify(this.state.beers))
        this.setState({
          beers: newBeers.concat(res.data)
        }, () => {
          this.props.history.push('/')
        })
      })

  }

  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' render={() => {
            return (
            <>
            <Navbar />
            <Beers beers={this.state.beers} />
            </>)
          }} />
          <Route path='/beers/:beerId' render={(routeProps) => {
            return (
              <>
              <Navbar/>
              <Beer {...routeProps} />
              </>
            )
          }} />
          <Route path='/random-beer' render={(routeProps) => {
            return (
              <>
              <Navbar />
              <RandomBeer {...routeProps} />
              </>
            )
          }} />
          <Route path="/new-beer" render={() => {
            return (
              <>
              <Navbar />
              <NewBeer onAdd={this.handleAddBeer} />
              </>
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
