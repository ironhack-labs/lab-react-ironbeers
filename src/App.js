import React from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Header from './components/Header';
import BeerDetails from './components/BeerDetails';
import { BrowserRouter as Link, Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  
  render() {
    return (
      <div className="App">
        <div className="container">
          {this.props.location.pathname === '/' ? null : <Header />}


          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/beers' render={props => {
              return <Beers {...props} beersList={this.state.beers} />
            }} />

            <Route path='/random-beer' component={RandomBeer} />
            <Route path='/new-beer' component={NewBeer} />
            <Route path='/beers/:beerId' component={BeerDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
