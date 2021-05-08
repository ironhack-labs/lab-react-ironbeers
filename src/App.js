import React from 'react';
import axios from 'axios';
import './App.css';


import Home from './components/Home'
import ListBeers from './components/ListBeers'
import SingleBeer from './components/SingleBeer'




import { Switch, Route } from 'react-router-dom';
class App extends React.Component {
    state = {
      beers: []
    }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        this.setState({...this.state, beers: [...result.data]})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={()=><Home />} />
          <Route exact path='/beers' component={()=> <ListBeers allBeers={this.state.beers} />} />
          <Route exact path='/beers/:_id' component={(routeProps)=> <SingleBeer {...routeProps} allBeers={this.state.beers} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
