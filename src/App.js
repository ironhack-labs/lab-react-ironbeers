import React from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';
import axios from 'axios'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listOfBeers: []
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/random-beer'>
            <RandomBeer/>
          </Route>
          <Route exact path='/new-beer'>
            <NewBeer/>
          </Route>
          <Route exact path='/beers'>
            <Beers beers={this.state.listOfBeers}/>
          </Route>
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('list of beers....', response.data);
        this.setState({
          listOfBeers: response.data,
        });
      })

      .catch((e) => {
        console.log('error getting characters from API', e);
      });

    }
  }
