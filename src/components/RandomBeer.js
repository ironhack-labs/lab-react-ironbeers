import React from "react";
import { Link } from "react-router-dom";

function RandomBeer() {
  return (
    <div>
      <header>
        <Link to="/">
          <img
            src="https://cdn4.iconfinder.com/data/icons/universal-7/614/20_-_Home-512.png"
            alt="to Homescreen"
          />
        </Link>
      </header>
      <h1>Random Beer</h1>
    </div>
  );
}

export default RandomBeer;
