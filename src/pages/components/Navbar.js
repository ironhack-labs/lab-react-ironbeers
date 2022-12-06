import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <Link
        to="/"
        className={({ isActive }) => (isActive ? "selected p-3" : "p-3")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
          alt=""
          className="icon"
        />
      </Link>
    </ul>
  );
};

export default Navbar;