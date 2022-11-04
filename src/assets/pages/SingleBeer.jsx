import React from "react";
import { Link } from "react-router-dom";

function SingleBeer() {
  return (
    <div>
      <nav style={{backgroundColor:'lightblue', height: '80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={'30px'} />
        </Link>
      </nav>
      SingleBeer
    </div>
  );
}

export default SingleBeer;
