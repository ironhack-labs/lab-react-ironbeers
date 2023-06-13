import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/headerImg.png";

function NewBeer() {
  return (
    <div>
      <Link to="/">
        <img src={headerImg} alt="headerImg" />
      </Link>
    </div>
  );
}

export default NewBeer;
