import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="App-header">
      <h1>
        <Link to={"/"}>Home</Link>
      </h1>
    </div>
  );
};

export default header;
