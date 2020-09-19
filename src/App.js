import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import NewBeerForm from './components/NewBeerForm';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = {
    beers: []
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        this.setState({
          beers: res.data
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = event.currentTarget;
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value
    })
      .then((res) => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then((res) => {
            this.setState({
              beers: res.data
            }, () => this.props.history.push('/'))
          })
      })
  }

  handleSearch = (event) => {
    let query = event.currentTarget.value.toLowerCase()
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((res) => {
        this.setState({
          beers: res.data
        })
      })

  }

  render() {
    if(this.state.beers.length === 0){
      return (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="info" />
        </div>
      )
    }

    return (
      <div>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" render={() => {
            return <AllBeers beers = {this.state.beers} onChange={this.handleSearch}/>
          }} />
          <Route path="/beers/:beerid" component={SingleBeer} />
          <Route path="/random-beer" component={SingleBeer} />
          <Route path="/new-beer" render={() => {
            return <NewBeerForm onSubmit={this.handleSubmit}/>
          }} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)