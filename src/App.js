import React from 'react';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';

class App extends React.Component {
  state = {
    beers:[]
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data);
        this.setState(
          {beers: response.data})
      })
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/beers' render={(props) => <Beers beers={this.state.beers} />} />
          <Route path='/beer/:id' component={SingleBeer} />
          <Route path='/random-beer' component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
