import React, { Component } from 'react'
import {Link} from 'react-router-dom';




class Home extends Component {
  

  render () {
      
      return (
        <div>
          <Link to='/randomBeer'>random</Link>
          <Link to='/newBeer'>new</Link>
          <Link to='/allbeers'>all</Link>
        </div>
          

      )
  }
}

export default Home;
