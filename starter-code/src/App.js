import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import AllBeers from './components/AllBeers'
import NavBar from './NavBar'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import axios from 'axios'
import SingleBeer from './components/SingleBeer'

class App extends Component {

  state = {
    beers: [], //fill this array of beers with beers from the api 
    ready: false
  }

async componentDidMount(){
    //console.log('happens once on mount')

    //.then promise 
    let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/`)//This takes some time by the time it gets back 
        console.log(response.data)
        this.setState({
          beers:response.data,
          randomBeers:response.data,
          ready: true
    })
    
    // .catch(err => console.log(err))
}


  render() { //Never set state in here 
    console.log(this.state)
    return (
      <div> 
        <Switch>
          <Route exact path ="/" render={(props) => <HomePage {...props} />}/>
          <Route exact path ="/NavBar" render={(props) => <NavBar {...props} />}/>
          <Route exact path ="/beers" render={(props) => <AllBeers {...props} beers={this.state.beers} ready={this.state.ready}/>}/>
          <Route exact path ="/random-beer" render={(props) => <RandomBeer {...props} beers={this.state.beers} ready={this.state.ready}/>}/>
          <Route exact path ="/new-beer" render={(props) => <NewBeer {...props} />}/>
          <Route exact path ="/single-beer/:beername" render={(props) => <SingleBeer {...props} beers={this.state.beers} ready={this.state.ready}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;