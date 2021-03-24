import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {this.props.location.pathname !== '/' && (
          <header>
            <Link to="/" className="home_btn">
              HOME
            </Link>
          </header>
        )}
      </div>
    );
  }
}

export default withRouter(Header);
