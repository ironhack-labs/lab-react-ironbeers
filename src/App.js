import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeersList from './components/BeersList';
import axios from 'axios';

class App extends React.Component {
  state = {
      beersArr: []
    }
  
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('list of beers....', response.data);
        this.setState({
          beersArr: response.data,          
        });
      
        
      })
      
      .catch((e) => {
        console.log('error getting beers from API', e);
      });

  }
  render(){


    return (
      <div className="App">
        {/* <Home/> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers'> 
            <BeersList beers={this.state.beersArr} />
          </Route>
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeer} />
        </Switch>
      </div>
    );

  }
  
}

export default App;
