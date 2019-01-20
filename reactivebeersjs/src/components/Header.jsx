import React, { Component } from "react";
import {Link} from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div >
      <Link to="/" ><div className="header"><img className="headerlogo" src="https://png.pngtree.com/svg/20161111/home_white_1319461.png" alt="beer"></img></div></Link>
      </div>
    );
  }
}

export default Header;