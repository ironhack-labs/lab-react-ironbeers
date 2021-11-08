import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    beers: [],
    randomBeer: '',
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });
        //  console.log(response.data)
      })
      .catch((e) => {
        console.log('error getting beers from API', e);
      });

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ randomBeer: response.data });
        console.log(this.state.randomBeer);
      })
      .catch((e) => {
        console.log('error getting beers from API', e);
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/beers">
            <Beers beers={this.state.beers} />
          </Route>
          <Route
            path="/beers/:id"
            render={(props) => {
              const beerToDisplay = this.state.beers.find((beer) => {
                return beer._id === props.match.params.id;
              });
              return <BeerDetails {...beerToDisplay}></BeerDetails>;
            }}
          ></Route>
          <Route path='/random-beer'><RandomBeer {...this.state.randomBeer}/></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
