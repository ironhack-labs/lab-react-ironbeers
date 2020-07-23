import React, { Component } from 'react';
import '../styles/beers.css'
import { Link } from 'react-router-dom';


export class Home extends Component {
  render() {
    return (
        <div>
        <div>
          <Link to="/beers"> All Beers </Link>
        </div>
        <div>
          <Link to="/random-beer"> Random Beer </Link>
        </div>
        <div>
          <Link to="/new-beer"> New beer </Link>
        </div>
      </div>
    );
  }
}

export default Home;
