import React, {Component} from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import BeerHome from "./components/beerhome/BeerHome.js"
import BeerList from "./components/beerlist/BeerList.js"
import EachBeer from "./components/eachbeer/EachBeer.js"
import RandomBeer from "./components/randombeer/RandomBeer.js"
import axios from 'axios';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      listOfBeers: [],
      ready: false
    }
  }



  getAllBeers = () => {
    axios.get('https://sample-api-ih.herokuapp.com')
    .then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data, ready: true
      })
    })
  }

  componentDidMount() {
    this.getAllBeers();
   
  }




  render(){
    // console.log(this.state.listOfBeers)
  return (
    <div className="App">
      <nav className="navbar"><Link to='/'>Home</Link></nav>
      <div className='bodydiv'>
      <Switch>
        <Route exact path ="/" render={(props) => <BeerHome {...props} allTheBeers={this.state.listOfBeers} ready = {this.state.ready}/>} />
        <Route exact path ="/beers" render={(props) => <BeerList {...props} allTheBeers={this.state.listOfBeers} ready = {this.state.ready}/>} />
        <Route exact path ="/random" render={(props) => <RandomBeer {...props} allTheBeers={this.state.listOfBeers} ready = {this.state.ready}/>} />
        <Route exact path ="/:id" render={(props) => <EachBeer {...props} allTheBeers={this.state.listOfBeers} ready = {this.state.ready}/>} />
      </Switch>
      </div>
    </div>
  );
  }
}

export default App;
