import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <div>

        <nav  className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <div style={{position:'absolute', left:'0', right:'0', fontSize:'2em'}} >
            <Link style={{color:'white', }}to="/">HOME</Link> 
            </div>
          </div>
        </nav>
        
      </div>
    )
  }
}
