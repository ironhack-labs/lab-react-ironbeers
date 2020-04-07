import React from "react";
import { Link } from "react-router-dom";
import { getUser, logout } from "../utils/auth";
import { withRouter } from 'react-router-dom'

import "../styling/Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(){
    logout()
    .then(() =>{
      this.props.history.push('/login')
    })
  }

  render() {
    let user = getUser();
    return (
      <div>
        {!user ? (
          <div className="nav">
            <div>
              <Link to="/signup">Signup</Link>
            </div>
            <div>
              <Link to="/signup">🏠</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        ) : (
          <div className="nav">
            <div>
              <p>Welcome {user.username}</p>
            </div>
            <div>
              <Link to="/">🏠</Link>
            </div>
            <div>
              <p onClick={this.logoutUser}>Logout</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Navbar);
