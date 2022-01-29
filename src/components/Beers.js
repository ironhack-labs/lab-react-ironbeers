import React from "react";
import { Link } from "react-router-dom";

function Beers() {
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
      <h1>Beers</h1>
    </div>
  );
}

export default Beers;
