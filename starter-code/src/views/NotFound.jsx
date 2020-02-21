import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      Oh no !<br />
      Are you lost ?!!<br />
      <Link to="/">go back to home </Link>
    </div>
  );
}
