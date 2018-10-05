import React, { Component } from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import SingleBeerLoader from './components/SingleBeerLoader';
import BeerList from './components/BeerList';
import RandomBeerLoader from './components/RandomBeerLoader'

class App extends Component {
  constructor(){
    super();
    this.state = {
      beer: null
    }
  }
  
  // componentDidMount(){
  //   if(!this.state.beer){
  //     this.getBeerById()
  //   }
  // }

  // getBeerById(){
  //   axios.get("https://ironbeer-api.herokuapp.com/beers/random")
  //     .then(beer => {
  //       this.setState({beer: beer.data[0], loading: false})
  //     });
  // }
  
  render() {
    return (
      <div>
        <nav><Link to="/">Home</Link></nav>
        <Switch>
          <Route exact path="/" render={() => {
            return  <div>
              <Link to="/all-beers">Beer List</Link>
              <Link to="/random-beer">Random Beer</Link>
              </div>
          }}></Route>
          <Route path="/all-beers" component={BeerList}></Route>
          <Route exact path="/beers/:id" component={SingleBeerLoader}></Route>
          <Route path="/random-beer" component={RandomBeerLoader}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
