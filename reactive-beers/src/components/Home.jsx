import React, {Component} from 'react';

import { Link } from 'react-router-dom';


export default class Home extends Component {
  render () {
    return (
      <div className="App link-beers">
        <li ><Link to="/all">All Beers</Link></li>
        <li ><Link to="/ran">Random Beer</Link></li>
        <li ><Link to="/add">Add Beer</Link></li>
      </div>
    );
  }
}
