import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css';

export default class NaviBar extends Component {
  render() {
    return (
      <nav className="navibar">
        <Link to={"/"}><img src="../Homy.svg"/></Link>
        {/* <Link to="/"><img className="icon" src="./25694.svg"/> </Link>   */}
        <img className="home-icon" src="../Homy.svg"/>
      </nav>
    );
  }
}
