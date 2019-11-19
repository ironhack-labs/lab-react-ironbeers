import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home-component/home';
import Beers from './components/beers-component/beers';
import RandomBeer from './components/random-beer-component/random-beer';
import NewBeer from './components/new-beer-component/new-beer';
import Beer from './components/beer-component/beer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      allBeers:[],
      beer:{},
      randomBeer: {},
      ready: false,
      newBeer:{
        name:'',
        tag_line:'',
        description:'',
        first_brewed:'',
        brewers_tips:'',
        attenuation_level:'',
        contributed_by:''
      },
      newBeerClone:{
        name:'',
        tag_line:'',
        description:'',
        first_brewed:'',
        brewers_tips:'',
        attenuation_level:'',
        contributed_by:''
      }
    }
  }
  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
         .then(allBeersList => {
           let x = allBeersList.data;
              this.setState({
                  allBeers:x,
                  ready:true
              });
         })
         .catch((err) => {
           console.log(err);
         })
    
  }
  dispBeer = (beer) => {
     this.setState({
        beer: beer.data,
        ready: true
     })
  }
  dispBeerRand = (beer) => {
    this.setState({
       randomBeer: beer.data,
       ready: true
    },()=>{
      console.log(this.state.randomBeer)
    })
 }
 setBeer = (beer) => {
   
   this.setState({
     newBeer: beer
   },()=>{
     console.log(this.state.newBeer);
   })
 }
 resetBeer = () => {
  this.setState({
    newBeer: this.state.newBeerClone
  })
 }
  render() {
    return (
      <div className="App">
       <header>
           <h1>IRONBEERS</h1>
        </header> 
 
       <Switch>
           <Route exact path="/home" component={Home} />
           <Route exact path="/beers" render = { (props) => <Beers {...props} allBeers = {this.state.allBeers} /> } />
           <Route exact path="/random-beer" render = { (props) => <RandomBeer {...props} randomBeer = {this.state.randomBeer} dispBeerRand = {this.dispBeerRand}/> } />
           <Route exact path="/new-beer" render = { (props) => <NewBeer {...props} newBeer = {this.state.newBeer} setBeer = {this.setBeer} resetBeer = {this.resetBeer}/> }  />
           <Route exact path="/beers/:id" render = { (props) => <Beer {...props} beer = {this.state.beer} dispBeer = {this.dispBeer}/> }/>
        </Switch>
    
        
       
        
      </div>
    );
  }
}

export default App;
