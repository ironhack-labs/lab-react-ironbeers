import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./Nav.css";
import { getUser, logout } from "../utils/auth";

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: getUser()
    }
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    logout();
    this.setState({ user: null });
  }

  render() {
    return (
      <nav>
        <Link to="../"><img src="../images/pngkey.com-home-png-2373015.png" alt="home"></img> </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }}to="../addbeer"><div className="nav-text">New beer</div></Link>
        <Link style={{ textDecoration: 'none', color: 'white' }}to="../addbeerfile"><div className="nav-text">New beer with file</div></Link>
        <Link style={{ textDecoration: 'none', color: 'white' }}to="../beers"><div className="nav-text">See all of our beers</div></Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="../randombeer"><div className="nav-text">Check out a random beer</div></Link>
        <Link style={{ textDecoration: 'none', color: 'white' }}to="../profile"><div className="nav-text">Profile</div></Link>
        {this.state.user ?
          <>
            <p className="nav-text" onClick={this.logoutUser}>Logout</p>
            <p><div className="nav-text">Welcome {this.state.user.firstname}</div></p>
          </>
          :
          <>
            <Link to="./login"><div className="nav-text">Login</div></Link>
            <Link to="./signup"><div className="nav-text">Sign up</div></Link>
          </>
        }
      </nav>
    )
  }
}