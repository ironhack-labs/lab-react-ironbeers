import React from 'react';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails'
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'

class App extends React.Component {

  state = {
    beers: []
}

componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    
    .then(response => {
        this.setState({beers: response.data})
    })
}

  render() {

    const beerList = this.state.beers

  return (
    <div className="App">
      
        <Switch>      
          <Route exact path='/' component={Home} />
          <Route exact path='/beers'  
            render={props => {
            return <Beers {...props} beerList={beerList}/> }} 
          />
          <Route exact path='/beers/:beerId' 
                render={props => {
            return <BeerDetails {...props} beers={beerList}/> }} /> 

          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeer} />
        </Switch>
                  
    </div>
  );
}
}

export default App;


