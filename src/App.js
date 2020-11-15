import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import OneBeer from './components/OneBeer';
import axios from 'axios';

class App extends Component {
  state = {beers:''};
  componentDidMount = async () =>{
    try {
      const beers = await axios.get('https://api.punkapi.com/v2/beers');
      this.setState({beers: beers.data})
      console.log(beers.data)
    } catch (error) {
      console.log(error)
    }
  }
  render(){
    return (
      <div className="App">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/beers'>Beers</Link>
        <Link to='/random-beer'>Random beer</Link>
        <Link to='/new-beer'>New beer</Link>
      </div>
      <Switch>
        <Route exact path='/' render={()=><p>Home</p>} />
        <Route exact path='/beers' render={()=><Beers arrBeers={this.state.beers}/>} />
        <Route exact path='/beers/:id' render={(routerProps)=><OneBeer {...routerProps} arrBeers={this.state.beers}/>} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
      </Switch>
      </div>
    );
  }
}

export default App;
