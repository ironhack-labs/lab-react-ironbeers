import React, { Component } from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Home';
import AllBeers from './AllBeers'
import Navigation from './Navbar/navbar'
import BeerDetails from './Detail'
import axios from 'axios';
import BeerRandom from './RandomBeer';
import BeerForm from './Beer-form/beer-form'

class App extends Component {

  constructor(){
        super()
        this.state = {
            beers: []
        }
    }

   componentDidMount() {
      axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })
    }
  render() {
    
    return (

    <main>
        <Navigation />
        
        

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" render={() => <AllBeers />} />
          <Route path="/beer/:id" render={props => <BeerDetails {...props} />} />
          <Route path="/random-beers" render={() => <BeerRandom />} />
          <Route path="/new-beer" render= {()=> <BeerForm />} />
        
      </Switch>
      </main>
      
  )}
    
}

export default App;
