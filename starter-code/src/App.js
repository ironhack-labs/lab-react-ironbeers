import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AllBeers from './Components/AllBeers';
import HomePage from './Components/HomePage';
import axios from 'axios'
import SingleBeer from './Components/SingleBeer';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      beerList: [],
      url: 'https://ih-beer-api.herokuapp.com/beers',
      randomBeer: {}
    }
  }

  async componentDidMount(){

    const theData = await this.getBeers();

    this.setState({
      beerList: theData,
  
    })
  }

getBeers = async() => {

 return await axios.get(this.state.url)
    .then(theData => {
      return theData.data.slice(0, 15)
      
    }).catch((err) => {
      console.log(err)
    })

}

  render() {
    console.log(this.state.randomBeer)
    return (
      <div className="App">
 
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/beers' render={(props) => <AllBeers {...props} beerList={this.state.beerList}/> }/>
      <Route exact path='/beers/:id' render={(props) => <SingleBeer {...props} beerList={this.state.beerList}/> }/>
      <Route exact path='/random' render={(props) => <RandomBeer {...props} theUrl={this.state.url}/> } />
      <Route exact path='/new-beer' render={(props) => <NewBeer {...props}  theUrl={this.state.url}/> } />
      </Switch>

      </div>
    );
  }
}

export default App;
