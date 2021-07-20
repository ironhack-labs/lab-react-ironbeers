import React from 'react';
import logo from './logo.svg';
import './App.css';
import homepage from './components/homepage';
import Beerdetail from './components/Beerdetail';
import beers from './components/beers';
import newBeers from './components/newBeers';
import randomBeer from './components/randomBeer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';


class App extends React.Component {
  // state = {
  //   beers: []
  // }

  // async componentDidMount() {
  //   try {
  //       let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
  //       console.log(response.data, 'hello')
  //       this.setState({
  //       beers: response.data
  //     })
  //   }
  //   catch(error) {
  //     console.log('Failed to fetch beers ', error)
  //   }
  // } 
  render() {
  return (
    <>
      <BrowserRouter>
        <Switch>
      <Route exact path="/" component={homepage} />
      {/*<Route exact path ={'/beers'} render={() => {
            return <beers beerData={this.state.beers}/>
          }} /> */}
       <Route exact path ={'/beers'} component={beers} /> 
      <Route exact path="/new-beer" component={newBeers} />
      <Route exact path="/random-beer" component={randomBeer} />
      <Route exact path="/beers/:_id" component={Beerdetail} />
      </Switch>
      </BrowserRouter>
    </>
  );
}
}
export default App;
