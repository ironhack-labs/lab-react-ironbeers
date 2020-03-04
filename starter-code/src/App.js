import React, { Component, Fragment } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './components/Home'
import AllBeers from './components/AllBeers'

class App extends Component {

  state={
    beers:[]
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
      this.setState({beers: response.data})
    })
  }

  render() {
    console.log(this.state.beers)
    return (
      <Fragment>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/allbeers" render={()=><AllBeers beers={this.state.beers}/>}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
