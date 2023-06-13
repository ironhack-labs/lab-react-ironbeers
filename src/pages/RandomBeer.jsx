import React from "react";
import headerImg from "../assets/headerImg.png";
import { Link } from "react-router-dom";

function RandomBeer() {
  return (
    <div>
      <Link to="/">
        <img src={headerImg} alt="headerImg" />
      </Link>
    </div>
  );
}

export default RandomBeer;
