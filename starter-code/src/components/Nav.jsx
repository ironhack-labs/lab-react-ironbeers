import React, { Component } from 'react'
import logo from "./../images/favicon.ico"
import paths from '../paths.json'
import { NavLink } from 'react-router-dom';
import { library, icon } from '@fortawesome/fontawesome-svg-core'


export default class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink to={paths.home.path}><i className="fa fa-home fa-5x"></i></NavLink>
      
        
      </div>
    )
  }
}
