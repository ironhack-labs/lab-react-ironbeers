import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Link to="/">
          <img
            src="https://img.icons8.com/material-outlined/50/000000/home--v1.png"
            alt="home"
          />
        </Link>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
