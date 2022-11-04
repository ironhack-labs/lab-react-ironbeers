import React from "react";
import { Link } from "react-router-dom";

function ListBeers() {
  return (
    <div>
      <nav style={{backgroundColor:'lightblue'}}>
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={'30px'} />
        </Link>
      </nav>

      <div>
        ListBeers
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default ListBeers;
