import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';

export default class Home extends React.Component{

  render(){
    return (
      <nav>
        <ul>
          <li><img width="80" src={logo} className="App-logo" alt="logo" /></li>
          <li><Link to="/beers">Beers</Link></li>
          <li><Link to="/random-beer">Random Beer</Link></li>
          <li><Link to="/new-beer">New Beer</Link></li>
        </ul>
      </nav>
    )
  }
}