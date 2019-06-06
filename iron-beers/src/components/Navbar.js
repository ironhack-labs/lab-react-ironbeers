import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../home.png'
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div className="navbar">
        <Link to="/" >
          <img src={logo} alt="home logo" />
        </Link>
      </div>
    )
  }
}

export default Home
