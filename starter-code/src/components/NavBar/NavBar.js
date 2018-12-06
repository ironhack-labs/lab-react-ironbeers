import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1"  style={{display: "block", height: 50, background: "blue" }}>IronBeers</span>
        </nav>
      </div>
    );
  }
}
