import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Beers from './components/Beers'
import SingleBeer from "./components/SingleBeer";
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
// import RandomBeer from './components/RandomBeer.js'
// import NewBeer from './components/NewBeer'


// import axios from 'axios';


class App extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = { 
  //     listOfBeers: [],
  //     ready: false,
  //  };
  
  
  // }
  // getAllBeers = () => {
  //   axios.get(`https://sample-api-ih.herokuapp.com/`)
  //   .then(responseFromApi => {
  //     this.setState({
  //       listOfBeers: responseFromApi.data, ready: true
  //     })
  //   })
  // }

  // componentDidMount() {
    
  //     this.getAllBeers();


  // }






  render(){
    return(
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/beers" component={Beers} />
        <Route exact path = "/singlebeer/:theID" component={SingleBeer} />
        <Route exact path = "/randombeer" component={RandomBeer} />
        <Route exact path = "/newbeer" component={NewBeer} />
      </Switch>
    )
  }

}
export default App;
