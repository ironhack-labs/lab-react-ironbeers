import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Beers from './Beers/Beers'

class App extends Component {

  constructor() {
    super()
    this.state = {

    }
    
  }

  render() {

    return (
      <div>
        <Link to={`/beers`} render={() => <Beers />}>
          All Beers!
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <Link to={'/random-beer'}>Random Beer!</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <Link to={'/new-beer'}>New Beer!</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
    );

  }

}
export default App;


