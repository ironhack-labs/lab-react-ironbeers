import React from "react";
import { Link } from "react-router-dom";
// import homeImage from "public/images/home-image.png";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src="./images/home-image.png" alt="" />
      </Link>
    </div>
  );
}
