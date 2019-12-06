import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <header className="header">
            <img
              src="https://www.stickpng.com/assets/images/588a6758d06f6719692a2d22.png"
              alt="home image"
              className="home-image"
            />
          </header>
        </Link>
      </div>
    );
  }
}
