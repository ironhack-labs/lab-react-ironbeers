import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './components/home/Home';
import AllBeers from './components/allbeers/AllBeers';
import RandomBeer from './components/randombeer/RandomBeer';
import NewBeer from './components/newbeer/NewBeer';
import TheBeer from './components/thebeer/TheBeer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { allTheBeers: [],
    randomBeer: [],
    ready: false,
    };
  }

  getAllTheBeers = () => {
    axios.get(`https://sample-api-ih.herokuapp.com/`)
    .then(responseFromApi => {
      this.setState({
        allTheBeers: responseFromApi.data,
        ready: true,
      })
    })
  }

  getRandomBeer = () => {
    axios.get(`https://sample-api-ih.herokuapp.com/random`)
    .then(responseFromApi => {
      this.setState({
        randomBeer: responseFromApi.data,
        ready: true,
      })
    })
  }

  componentDidMount() {
    this.getAllTheBeers();
    this.getRandomBeer();
  }

  
  render(){
    return (
      <div className="App is-block">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />       
            <Route exact path="/beers" render={(props) => <AllBeers
            {...props}
            allTheBeers = {this.state.allTheBeers}
            getData = {this.getAllTheBeers}
            ready = {this.state.ready}
            /> } />
            <Route exact path="/beers/:theID" render ={(props)=> <TheBeer
           {...props} 
           allTheBeers = {this.state.allTheBeers}
           ready = {this.state.ready}
           getData = {this.getAllTheBeers}
           />} />
           <Route exact path="/random-beer" render ={(props)=> <RandomBeer
           {...props} 
           randomBeer = {this.state.randomBeer}
           ready = {this.state.ready}
           getData = {this.getRandomBeer}
           />} />
            <Route exact path="/new-beer" component={NewBeer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
