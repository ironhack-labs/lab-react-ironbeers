import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <div>
       <ul>
       <li><Link to='/'>Home</Link></li>
       </ul>
      </div>
    )
  }
}
