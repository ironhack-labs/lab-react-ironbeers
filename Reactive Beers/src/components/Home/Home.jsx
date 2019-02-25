import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div>
       <li><Link to='/beers'>All</Link></li> 
       <li><Link to='/new'>New</Link></li> 
       <li><Link to='/random'>Random</Link></li>  
      
        
      </div>
    )
  }
}
