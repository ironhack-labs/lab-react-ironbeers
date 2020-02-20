import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      Oh no !<br />
      We can't find any beers...<br />
      <Link to="/">go back to home </Link>
    </div>
  );
}