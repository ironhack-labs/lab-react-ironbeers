import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer.js';
import Header from './components/Header.js';
import EachBeer from './components/EachBeer.js';
import SearchBeer from './components/SearchBeer.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    beerList: [],
  };

  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    // console.log(res);
    //---Here you can see all the info you get from API. In array "data" you can see all the beer objects with properties.
    this.setState({
      beerList: res.data,
    });
    // console.log(this.state);
    //---Here you can see how the state was reset to the data inside res variable
  }

  render() {
    // console.log('why I see you twice?');
    return (
      <div className="App">
        <Header />
        <Link to="/all-beers">All beers</Link>
        <br />
        <Link to="/random-beer">Random beer</Link>
        <br />
        <Link to="/new-beer">New beer</Link>

        <Switch>
          <Route
            exact
            path="/all-beers"
            render={() => <AllBeers beerList={this.state.beerList} />}
          />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          {/* <Route exact path="/random-beer" component ={RandomBeer} /> */}
          {/* I can use this component ={} way to display, but it doesn't let me pass props */}
          <Route exact path="/new-beer" render={() => <NewBeer />} />
          {/* <Route exact path="/all-beers/:id" render={(props) => (<EachBeer beerList={this.state.beerList} {...props} /> )/> */}
          <Route exact path="/all-beers/:id" component={EachBeer} />
          {/* I can use component={EachBeer} and still get props pass into EachBeer.js because those are default props that BrowserRouter pass. */}
          <Route exact path="/search-beer" component={SearchBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
