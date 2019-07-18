import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeButton from "../img/homeBtn.png";

export default class HomeBtn extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">
          <button className="homeBtn">
            <img src={HomeButton} alt="Home" />
          </button>
        </Link>
      </React.Fragment>
    );
  }
}
