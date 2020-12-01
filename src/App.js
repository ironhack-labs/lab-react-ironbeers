import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import axios from 'axios'
import ListBeers from './components/ListBeers/ListBeers';
import {Route, Switch} from 'react-router-dom';
import SingleBeer from './components/Singlebeer/SingleBeer';
import RandomBeer from './components/Randombeer/RandomBeer';
import NewBeer from './components/Newbeer/NewBeer';


class App extends React.Component {
  state = {
    beer: [],
    randomBeer: [],
   
  }


  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      this.setState({
      beers: response.data
      })
      
  
    })
  }

render() {
  return (
  <div className="App">
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" render={(props) => <ListBeers  beers={this.state.beers} onSearch={this.searchHandler} {...props}/>} />
        <Route exact path="/beers/:id" render={(props) => <SingleBeer beers={this.state.beers} {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer randomBeer={this.state.randomBeer} {...props} />} />
        <Route exact path="/new-beer" component={NewBeer} />
     </Switch>

  </div>

  )
  
}

}

export default App;


