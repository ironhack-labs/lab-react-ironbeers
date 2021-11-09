import React from 'react';
import './App.css';
import Home from './Component/Home'
import BeersList from './Component/BeersList'
import RandomBeer from './Component/RandomBeer'
import NewBeer from './Component/NewBeer'
import axios from 'axios';


import {Route, Switch} from 'react-router-dom'



class App extends React.Component{

  state = {
    beers: []
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({beers: response.data})
      })
      .catch((e) => {
        console.log('error getting beers from API', e)
      })
  }


  render(){

    return (
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
              
            <Route exact path="/beerslist">
                <BeersList beers={this.state.beers} />
            </Route>

            <Route exact path="/randombeer" component={RandomBeer}/>
            <Route exact path="/newbeer" component={NewBeer}/>

          </Switch>
        </div>
    );
  }
}

export default App;
