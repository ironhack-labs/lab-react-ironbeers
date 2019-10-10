import React, { Component } from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import BeerDetail from './components/BeerDetail'
import Home from './components/Home'
import axios from 'axios';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      allBeers:{},
      filteredBeers:{},
      searchTerm:'',
      ready:false,
    };
  }

  componentDidMount(){
    axios.get('https://ih-beer-api.herokuapp.com/beers')
          .then(response=>{
            this.setState(
              {
                allBeers: response.data.reverse().slice(0,20),
                filteredBeers: response.data.reverse().slice(0,20),
                ready:true,
              }
            ) 
          })
          .catch(err=>console.log(err))
  }


    searchBeers=(beer)=>{

      // e.preventDefault()
      
      axios.get(`https://ih-beer-api.herokuapp.com/beers/search?q=${beer}`)
          .then(response => {
            this.setState({
              filteredBeers: response.data,
            })
          })
          .catch(err=>console.log(err))
    }


  render() {
    return (
      <div className="App">
      <Switch>  
        <Route exact path="/" component= { Home }/>
        <Route exact path="/beers" component= {(props)=><Beers {...props} search={this.searchBeers} beers={this.state.filteredBeers} ready={this.state.ready}/> } searchTerm={this.props.searchTerm}/>
        <Route exact path="/random-beer" component= {(props)=><RandomBeer {...props}  ready={this.state.ready}/>} />
        <Route exact path="/new-beer" component= {(props)=><NewBeer {...props} />} />
        <Route path="/beers/:id" component= {(props)=><BeerDetail {...props} beers={this.state.filteredBeers} />} />
      </Switch>
      </div>
    );
  }
}

export default App;
