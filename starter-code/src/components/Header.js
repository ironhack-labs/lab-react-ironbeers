import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <Link to="/">
        <header className="full-width ta-center">go home</header>
      </Link>
    );
  }
}

export default Header;