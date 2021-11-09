import React from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';
import axios from 'axios'
import BeerDetails from './components/BeerDetails';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listOfBeers: [],
      randomBeer: ''
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
            <RandomBeer {...this.state.randomBeer}/>
          </Route>
          <Route exact path='/new-beer'>
            <NewBeer/>
          </Route>
          <Route exact path='/beers'>
            <Beers beers={this.state.listOfBeers}/>
          </Route>
          <Route path='/beers/:id' render={(props) => {
            const beerToDisplay = this.state.listOfBeers.find((beer) => {
              return beer._id === props.match.params.id
            })
            return <BeerDetails {...beerToDisplay}/>
          }}/>
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

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        console.log('xxxxxxxxx')
        console.log(response.data)
        this.setState({randomBeer: response.data})
      })

  }
  }
