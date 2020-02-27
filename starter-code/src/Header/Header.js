import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <Link to={"/"}>
        <section className="Header">
          <i className="fas fa-home"> </i>{" "}
        </section>{" "}
      </Link>
    );
  }
}
