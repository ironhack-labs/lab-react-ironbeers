import React from "react";
import { Link } from "react-router-dom";

function NewBeer() {
  return (
    <div>
      {" "}
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
    </div>
  );
}

export default NewBeer;
