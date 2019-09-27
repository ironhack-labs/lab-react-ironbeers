import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to='/'>
          <img
            className='house-logo'
            src='/images/House.png'
            alt='house logo'
          />
        </Link>
      </div>
    );
  }
}
