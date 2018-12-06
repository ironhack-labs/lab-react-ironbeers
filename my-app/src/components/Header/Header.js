import React, { Component } from 'react';
import './Header.css'
import imgCasa from './home.png'
import { Link, Route } from 'react-router-dom';
import App from '../../App'


export default class Header extends Component {
  render() {
    return (
      <div className="containerHeader">

      <Link className="link" to="/">
        <img style={{width: '50px', height: '50px' }} src={imgCasa} alt="{imgCasa}"/>
      </Link>
        
      <Route exact path="/" component={App}/>
      </div>
    );
  }
}