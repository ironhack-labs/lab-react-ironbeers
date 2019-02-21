import React, { Component } from 'react';
import Home from './routes/home.js';
import Beers from './routes/beers.js'
import RandonBeer from './routes/randon-beer.js'
import NewBeer from './routes/new-beer.js'
import BeerDetail from './routes/beerDetail.js'
import Navbar from './components/Navbar.js';
import { Switch, Route } from 'react-router-dom';
import axios from  'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      beers: []
    }
     this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
    .then(response => {
      this.setState({beers: response.data})
    })
  }

  updateState(arr){
    this.setState({
      beers: arr
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' 
            render={() => <Beers allbeers={this.state.beers}/>} 
          />
          <Route exact path='/randon-beer' 
            render={() => <RandonBeer updateState={this.state.updateState} beers={this.state.beers}/>} 
          />
          <Route exact path='/new-beer' component={NewBeer} />
          <Route exact path="/:id" 
            render={(props) => <BeerDetail id={props.match.params.id}/>} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
