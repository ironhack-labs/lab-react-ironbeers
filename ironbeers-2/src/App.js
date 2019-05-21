import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './Components/Nav'
import Beers from './Components/Beers'
import NewBeers from './Components/NewBeers'
import RandomBeers from './Components/RandomBeers'
import Home from './Components/Home'
import axios from 'axios'



import { Switch, Route, Redirect } from 'react-router-dom'

export default class App extends Component {

  state = {
    beers: [],
    randomBeers: [],
    name: '',
    tagline: '',
    description: '',
    brewersTips: '',
    attenuation: '',
    contributer: '',
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(theBeers => {
      // console.log('beers list', theBeers)
      this.setState({ beers: theBeers.data })
    })

    axios.get("https://ih-beer-api.herokuapp.com/beers/random").then(randomBeer => {
      console.log('A random beer appeared!', randomBeer)
      this.setState({ randomBeers: randomBeer.data })
    })

    //Finish Axios Post
    // axios.post('https://ih-beer-api.herokuapp.com/beers/new').then(newBeer => {
    //   console.log('A new beer has been added', newBeer)
    //   this.setState({ name: })
    // })
  }



  render() {

    return (
      <Fragment className="App" >

        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Below passes all props and state to the specified page */}
          <Route exact path="/Beers" component={(props) => <Beers {...props} {...this.state} />} />
          <Route exact path="/NewBeers" component={NewBeers} />
          <Route exact path="/RandomBeers" component={(props) => <RandomBeers {...props} {...this.state} />} />
        </Switch>

      </Fragment>
    );
  }
}
