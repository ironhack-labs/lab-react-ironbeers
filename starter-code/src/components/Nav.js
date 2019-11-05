import React from "react";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../App.css";

// library.add(faHome);

const Navbar = () => {
  return (
    <Link to="/">
      <nav className="justify-content-center navbar navbar-dark bg-primary">
        <div style={{ color: "white" }}>
          <h1>
            <FaHome />
          </h1>
        </div>
      </nav>
    </Link>
  );
};

export default Navbar;

dom.watch();
