import React, { PureComponent } from 'react'
import HomeScreen from './components/Home.js'
import './App.css'
import { Link, Switch, Route } from 'react-router-dom'
import AllBeers from './components/AlBeers'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="nav">
            <img src='https://i7.pngguru.com/preview/907/970/515/computer-icons-home-house-home-thumbnail.jpg' alt='home' />
            <Link to="/">Home</Link>
            <Link to="/all-beers">All Beers</Link>

        </div>
        <Switch>
        <Route exact path='/' render={props => <HomeScreen/>}/> 
          <Route exact path='/all-beers' render={props => <AllBeers/>}/> 
          <Route exact path='/random-beer' render={props => <RandomBeer/>}/>
          <Route exact path='/new-beer' render={props => <NewBeer/>}/>
          <Route exact path="/beers/:id" render={(props) => <SingleBeer {...props}/>} />
        </Switch>
      </div>
    )
  }
}

export default App
