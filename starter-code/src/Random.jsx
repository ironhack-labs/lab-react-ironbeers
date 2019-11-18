import React from "react";
import { Link } from "react-router-dom";

export default function Random() {
  return (
    <div>
      <Link to="/">
        <button className="btn btn-warning">Home</button>
      </Link>
    </div>
  );
}
