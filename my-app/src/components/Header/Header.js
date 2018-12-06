import React, { Component } from 'react';
import './Header.css'
import imgCasa from './home.png'


export default class Header extends Component {
  render() {
    return (
      <div className="containerHeader">
        <img style={{width: '50px', height: '50px' }} src={imgCasa} alt="{imgCasa}"/>
      </div>
    );
  }
}