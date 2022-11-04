import React from "react";
import { Link } from "react-router-dom";

function NewBeer() {
  return (
    <div>
         <nav style={{backgroundColor:'lightblue'}}>
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={'30px'} />
        </Link>
      </nav>
      NewBeer
    </div>
  );
}

export default NewBeer;
