import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {


  render() {
    return (
      <div className="Home">
        <Link to='/all'>All Beers</Link>
        <Link to='/random'>Random Beer</Link>
      </div>
    );
  }
}

export default Home;