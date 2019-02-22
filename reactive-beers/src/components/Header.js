import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
        <Link to='/'><img src ="/img/icon.png" alt="home-icon" className="home_link"/></Link>
        </div>
      </div>
    )
  }
}
