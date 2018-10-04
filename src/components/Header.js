import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';

export default class Header extends React.Component{
  render(){
    return (
      <header>
        <Link to="/"><img width="80" src={logo} className={(this.props.loading)?"loading-logo":""} alt="logo" /></Link>
      </header>
    )
  }
}