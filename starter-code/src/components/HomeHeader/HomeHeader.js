import React, { Component } from "react";
import { Link } from "react-router-dom";
import homebutton from "../../images/homebutton.png"

export default class HomeHeader extends Component {
  render() {
    return (
      
        <Link to="/" className="btn btn-lg btn-outline-dark">
          <img src={homebutton} alt="Home Button" width="100%" />
        </Link>
      
    );
  }
}
