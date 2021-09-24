import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage/HomePage'
import './App.css'
import AllBeers from './Components/Pages/AllBeers/AllBeers'
import NewBeer from './Components/Pages/NewBeer/NewBeer'
import RandomBeer from './Components/Pages/RandomBeer/RandomBeer'
import BeersDetails from './Components/Pages/BeersDetails/BeersDetails'
import NavigationBar from './Components/NavBar/NavigationBar'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
      </Switch>
      <NavigationBar />
      <Switch>
        <Route path="/random-beer" render={() => <RandomBeer />} />
        <Route path="/new-beer" render={() => <NewBeer />} />
        <Route path="/beers" render={() => <AllBeers />} />
        <Route path="/:id" render={(props) => <BeersDetails{...props} />} />
      </Switch>

    </div>
  );
}

export default App;
