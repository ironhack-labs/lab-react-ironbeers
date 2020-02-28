import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/ui/Navigation'
import BeerList from './components/BeersList/BeerList'
import BeerDetails from './components/BeerDetails/BeerDetails'
import BeerForm from './components/BeerForm/BeerForm'
// import RandomBeer 

class App extends Component {
  render() {
    return (
      <>
        <Switch>

          <Route exact path="/" render={() => <Navigation />} />
          <Route path="/beers" render={() => <BeerList />} />
          <Route path="/detalles/:id" render={match => <BeerDetails {...match} />} />
          <Route path="/new" render={() => <BeerForm />} />
          {/* <Route path="/random" render={() => <RandomBeer /> /> */}
        </Switch>
      </>
    )
  }
}

export default App