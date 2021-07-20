import React, { Component } from 'react';
import './App.css';
import image0 from '../src/assets/beerHeader.png'
import image1 from '../src/assets/beers.png'
import image2 from '../src/assets/new-beer.png'
import image3 from '../src/assets/random-beer.png'
import {Switch, Route} from 'react-router-dom'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import axios  from 'axios'

// const url = "https://ih-beers-api2.herokuapp.com/beers"

class App extends Component {

state = {
  beers:[],
}  


  // /api/beers requst here
  async componentDidMount(){
    try {
      // fetch all the initial todos to show on the home page
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log(response.data)
        this.setState({
          beers: response.data
        })
      }  
      catch(err){
        console.log('Todo fetch failed', err)
        this.setState({
          fetchingUser: false,
        })
      }
    }


render() {
  console.log('App props', this.props)
  return (
    <div className="App">
      <Switch>
      <header className="App-header">
      <img src={image0} width='500' alt='beerHeader' />
      <img src={image1} width='500' alt='beerpic' />
      <Route exact path={'/'} render={() => {
        return <Beers beers={this.state.beers} /> 
      }} />
        
        <img src={image2} width='500' alt='newbeerpic' />
        <Route exact path={'/'} render={() =>{
          return <RandomBeer beer={this.state.beers} />
        }} />
      
        <img src={image3} width='500' alt='random-pic' />
        <Route exact path={'/'} render={() =>{
          return <NewBeer beer={this.state.beers} />
        }} />
      </header>
      </Switch>
    </div>
  );
    }
}

export default App;
