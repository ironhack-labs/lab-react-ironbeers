import React, { Component } from 'react';
//import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="top-bar topbar-center-logo" id="topbar-center-logo">
          <div className="top-bar-center">
            <a href="/">
              <img className="iconHome" src="../logo192.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
